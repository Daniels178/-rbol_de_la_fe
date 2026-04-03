import { Kysely } from 'kysely';
import { DB } from '../types/database.types';

export async function migrate007CreateSnapshots(db: Kysely<DB>) {
  await db.schema
    .createTable('snapshots')
    .ifNotExists()
    .addColumn('id', 'integer', (col) => col.primaryKey().autoIncrement())
    .addColumn('nombre', 'text', (col) => col.notNull())
    .addColumn('datos', 'text', (col) => col.notNull())
    .addColumn('fecha_creacion', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .addColumn('creado_por', 'integer', (col) =>
      col.notNull().references('usuarios.id').onDelete('cascade')
    )
    .execute();

  console.log('✅ Migración 007: Tabla snapshots creada');
}

export async function rollback007CreateSnapshots(db: Kysely<DB>) {
  await db.schema.dropTable('snapshots').ifExists().execute();
  console.log('🔄 Rollback 007: Tabla snapshots eliminada');
}
