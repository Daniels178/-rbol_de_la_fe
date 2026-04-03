import { Kysely } from 'kysely';
import { DB } from '../types/database.types';

export async function migrate001CreatePersonas(db: Kysely<DB>) {
  await db.schema
    .createTable('personas')
    .ifNotExists()
    .addColumn('id', 'integer', (col) => col.primaryKey().autoIncrement())
    .addColumn('nombre', 'text', (col) => col.notNull())
    .addColumn('apellido', 'text', (col) => col.notNull())
    .addColumn('telefono', 'text')
    .addColumn('direccion', 'text')
    .addColumn('distrito', 'text')
    .addColumn('estado_civil', 'text')
    .addColumn('fecha_nacimiento', 'text')
    .addColumn('bautizado', 'integer', (col) => col.notNull().defaultTo(0))
    .addColumn('fecha_bautismo', 'text')
    .addColumn('lider', 'integer', (col) =>
      col.references('personas.id').onDelete('set null')
    )
    .addColumn('creado_en', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .addColumn('actualizado_en', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .execute();

  // Índice para búsquedas por nombre
  await db.schema
    .createIndex('idx_personas_nombre')
    .on('personas')
    .columns(['nombre', 'apellido'])
    .execute();

  console.log('✅ Migración 001: Tabla personas creada');
}

export async function rollback001CreatePersonas(db: Kysely<DB>) {
  await db.schema.dropTable('personas').ifExists().execute();
  console.log('🔄 Rollback 001: Tabla personas eliminada');
}
