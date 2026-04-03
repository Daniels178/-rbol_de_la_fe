import { Kysely } from 'kysely';
import { DB } from '../types/database.types';

export async function migrate008CreateGuardianes(db: Kysely<DB>) {
  await db.schema
    .createTable('guardianes_alertas')
    .ifNotExists()
    .addColumn('id', 'integer', (col) => col.primaryKey().autoIncrement())
    .addColumn('tipo', 'text', (col) => col.notNull())
    .addColumn('persona_id', 'integer', (col) =>
      col.references('personas.id').onDelete('cascade')
    )
    .addColumn('mensaje', 'text', (col) => col.notNull())
    .addColumn('prioridad', 'text', (col) => col.notNull())
    .addColumn('leida', 'integer', (col) => col.notNull().defaultTo(0))
    .addColumn('fecha_alerta', 'text', (col) => col.notNull())
    .addColumn('fecha_lectura', 'text')
    .addColumn('created_at', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .execute();

  await db.schema
    .createIndex('idx_guardianes_tipo')
    .on('guardianes_alertas')
    .columns(['tipo'])
    .execute();

  await db.schema
    .createIndex('idx_guardianes_leida')
    .on('guardianes_alertas')
    .columns(['leida'])
    .execute();

  console.log('✅ Migración 008: Tabla guardianes_alertas creada');
}

export async function rollback008CreateGuardianes(db: Kysely<DB>) {
  await db.schema.dropTable('guardianes_alertas').ifExists().execute();
  console.log('🔄 Rollback 008: Tabla guardianes_alertas eliminada');
}
