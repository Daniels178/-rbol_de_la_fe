import { Kysely } from 'kysely';
import { DB } from '../types/database.types';

export async function migrate005CreateUsuarios(db: Kysely<DB>) {
  await db.schema
    .createTable('usuarios')
    .ifNotExists()
    .addColumn('id', 'integer', (col) => col.primaryKey().autoIncrement())
    .addColumn('username', 'text', (col) => col.notNull().unique())
    .addColumn('password_hash', 'text', (col) => col.notNull())
    .addColumn('rol', 'text', (col) => col.notNull())
    .addColumn('pin', 'text')
    .addColumn('activo', 'integer', (col) => col.notNull().defaultTo(1))
    .addColumn('ultimo_acceso', 'text')
    .addColumn('created_at', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .addColumn('updated_at', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .execute();

  console.log('✅ Migración 005: Tabla usuarios creada');
}

export async function rollback005CreateUsuarios(db: Kysely<DB>) {
  await db.schema.dropTable('usuarios').ifExists().execute();
  console.log('🔄 Rollback 005: Tabla usuarios eliminada');
}
