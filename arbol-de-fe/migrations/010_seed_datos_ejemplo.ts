import { Kysely } from 'kysely';
import { DB } from '../types/database.types';

export async function migrate010SeedDatosEjemplo(db: Kysely<DB>) {
  // Insertar algunas personas de ejemplo
  await db
    .insertInto('personas')
    .values([
      { nombre: 'Juan', apellido: 'Pérez', bautizado: 1, distrito: 'Centro' },
      { nombre: 'María', apellido: 'González', bautizado: 1, distrito: 'Norte' },
      { nombre: 'Carlos', apellido: 'Rodríguez', bautizado: 0, distrito: 'Sur' },
      { nombre: 'Ana', apellido: 'Martínez', bautizado: 0, distrito: 'Centro' },
      { nombre: 'Luis', apellido: 'Hernández', bautizado: 1, distrito: 'Este' },
    ])
    .execute();

  // Insertar feligreses para los bautizados
  const personas = await db.selectFrom('personas').select(['id', 'nombre', 'bautizado']).execute();
  
  for (const persona of personas) {
    if (persona.bautizado === 1) {
      await db
        .insertInto('feligreses')
        .values({
          persona_id: persona.id,
          fecha_miembro: new Date().toISOString(),
          activo: 1,
        })
        .execute();
    }
  }

  console.log('✅ Migración 010: Datos de ejemplo insertados');
}

export async function rollback010SeedDatosEjemplo(db: Kysely<DB>) {
  await db.deleteFrom('feligreses').execute();
  await db.deleteFrom('personas').execute();
  console.log('🔄 Rollback 010: Datos de ejemplo eliminados');
}
