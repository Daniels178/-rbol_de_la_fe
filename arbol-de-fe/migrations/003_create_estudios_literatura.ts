import { Kysely } from 'kysely';
import { DB } from '../types/database.types';

export async function migrate003CreateEstudiosLiteratura(db: Kysely<DB>) {
  // Tabla Estudios Bíblicos
  await db.schema
    .createTable('estudios_biblicos')
    .ifNotExists()
    .addColumn('id', 'integer', (col) => col.primaryKey().autoIncrement())
    .addColumn('persona_id', 'integer', (col) =>
      col.notNull().references('personas.id').onDelete('cascade')
    )
    .addColumn('estudiante_nombre', 'text', (col) => col.notNull())
    .addColumn('leccion', 'text', (col) => col.notNull())
    .addColumn('fecha_inicio', 'text', (col) => col.notNull())
    .addColumn('fecha_fin', 'text')
    .addColumn('completado', 'integer', (col) => col.notNull().defaultTo(0))
    .addColumn('maestro_id', 'integer', (col) =>
      col.references('personas.id').onDelete('set null')
    )
    .addColumn('created_at', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .addColumn('updated_at', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .execute();

  // Tabla Literatura
  await db.schema
    .createTable('literatura')
    .ifNotExists()
    .addColumn('id', 'integer', (col) => col.primaryKey().autoIncrement())
    .addColumn('persona_id', 'integer', (col) =>
      col.notNull().references('personas.id').onDelete('cascade')
    )
    .addColumn('titulo', 'text', (col) => col.notNull())
    .addColumn('tipo', 'text', (col) => col.notNull())
    .addColumn('fecha_entrega', 'text', (col) => col.notNull())
    .addColumn('devuelto', 'integer', (col) => col.notNull().defaultTo(0))
    .addColumn('fecha_devolucion', 'text')
    .addColumn('created_at', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .addColumn('updated_at', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .execute();

  await db.schema
    .createIndex('idx_estudios_persona_id')
    .on('estudios_biblicos')
    .columns(['persona_id'])
    .execute();

  await db.schema
    .createIndex('idx_literatura_persona_id')
    .on('literatura')
    .columns(['persona_id'])
    .execute();

  console.log('✅ Migración 003: Tablas estudios_biblicos y literatura creadas');
}

export async function rollback003CreateEstudiosLiteratura(db: Kysely<DB>) {
  await db.schema.dropTable('estudios_biblicos').ifExists().execute();
  await db.schema.dropTable('literatura').ifExists().execute();
  console.log('🔄 Rollback 003: Tablas estudios_biblicos y literatura eliminadas');
}
