import { Kysely } from 'kysely';
import { DB } from '../types/database.types';
import fs from 'fs';
import path from 'path';

interface MigrationFile {
  name: string;
  migrate: (db: Kysely<DB>) => Promise<void>;
  rollback: (db: Kysely<DB>) => Promise<void>;
}

async function loadMigrations(): Promise<MigrationFile[]> {
  const migrationsDir = path.join(__dirname, '../../migrations');
  const files = fs.readdirSync(migrationsDir).filter(f => f.endsWith('.ts') || f.endsWith('.js'));
  
  const migrations: MigrationFile[] = [];
  
  for (const file of files.sort()) {
    const migration = await import(path.join(migrationsDir, file));
    const name = file.replace(/\.(ts|js)$/, '');
    
    // Buscar funciones migrate y rollback en el módulo
    const migrateFn = Object.values(migration).find(fn => 
      typeof fn === 'function' && fn.name.startsWith('migrate')
    ) as (db: Kysely<DB>) => Promise<void>;
    
    const rollbackFn = Object.values(migration).find(fn => 
      typeof fn === 'function' && fn.name.startsWith('rollback')
    ) as (db: Kysely<DB>) => Promise<void>;
    
    if (migrateFn) {
      migrations.push({ name, migrate: migrateFn, rollback: rollbackFn });
    }
  }
  
  return migrations;
}

export async function runAllMigrations(db: Kysely<DB>) {
  const migrations = await loadMigrations();
  
  console.log(`📦 Ejecutando ${migrations.length} migraciones...`);
  
  for (const migration of migrations) {
    try {
      await migration.migrate(db);
    } catch (error) {
      console.error(`❌ Error en migración ${migration.name}:`, error);
      throw error;
    }
  }
  
  console.log('✅ Todas las migraciones completadas');
}

export async function rollbackLastMigration(db: Kysely<DB>) {
  const migrations = await loadMigrations();
  
  if (migrations.length === 0) {
    console.log('No hay migraciones para revertir');
    return;
  }
  
  const lastMigration = migrations[migrations.length - 1];
  
  console.log(`🔄 Revertiendo migración ${lastMigration.name}...`);
  
  try {
    await lastMigration.rollback(db);
    console.log(`✅ Migración ${lastMigration.name} revertida`);
  } catch (error) {
    console.error(`❌ Error al revertir ${lastMigration.name}:`, error);
    throw error;
  }
}

// Script principal para ejecutar desde CLI
if (require.main === module) {
  (async () => {
    const { createDatabase } = await import('./database');
    const dbPath = process.env.DB_PATH || './data/arbol-de-fe.db';
    
    // Crear directorio data si no existe
    const dataDir = path.dirname(dbPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const db = createDatabase(dbPath);
    
    const command = process.argv[2];
    
    if (command === 'rollback') {
      await rollbackLastMigration(db);
    } else {
      await runAllMigrations(db);
    }
    
    await db.destroy();
  })();
}
