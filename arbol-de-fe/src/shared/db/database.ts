import { Kysely, SqliteDialect } from 'kysely';
import Database from 'better-sqlite3';
import { DB } from '../types/database.types';

export function createDatabase(dbPath: string): Kysely<DB> {
  const sqlite = new Database(dbPath);
  
  // Habilitar foreign keys y WAL mode
  sqlite.pragma('journal_mode = WAL');
  sqlite.pragma('foreign_keys = ON');
  
  return new Kysely<DB>({
    dialect: new SqliteDialect({
      database: sqlite,
    }),
  });
}

export async function runMigrations(db: Kysely<DB>, migrationsDir: string) {
  const { FileMigrationProvider } = await import('kysely');
  const { Migrator } = await import('kysely');
  const fs = await import('fs');
  const path = await import('path');

  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder: migrationsDir,
    }),
  });

  const { error, results } = await migrator.migrateToLatest();

  if (results) {
    for (const result of results) {
      console.log(
        `Migración ${result.migrationName}: ${result.status}`
      );
    }
  }

  if (error) {
    console.error('Error en migraciones:', error);
    throw error;
  }
}
