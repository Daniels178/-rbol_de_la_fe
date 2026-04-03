import { Kysely } from 'kysely';
import { DB } from '../types/database.types';

export async function migrate006CreateDashboardEventos(db: Kysely<DB>) {
  await db.schema
    .createTable('dashboard_eventos')
    .ifNotExists()
    .addColumn('id', 'integer', (col) => col.primaryKey().autoIncrement())
    .addColumn('tipo', 'text', (col) => col.notNull())
    .addColumn('datos', 'text', (col) => col.notNull())
    .addColumn('timestamp', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .addColumn('procesado', 'integer', (col) => col.notNull().defaultTo(0))
    .execute();

  await db.schema
    .createIndex('idx_dashboard_tipo')
    .on('dashboard_eventos')
    .columns(['tipo'])
    .execute();

  await db.schema
    .createIndex('idx_dashboard_procesado')
    .on('dashboard_eventos')
    .columns(['procesado'])
    .execute();

  console.log('✅ Migración 006: Tabla dashboard_eventos creada');
}

export async function rollback006CreateDashboardEventos(db: Kysely<DB>) {
  await db.schema.dropTable('dashboard_eventos').ifExists().execute();
  console.log('🔄 Rollback 006: Tabla dashboard_eventos eliminada');
}
