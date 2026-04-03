import { Kysely } from 'kysely';
import { DB } from '../types/database.types';

export async function migrate002CreateFeligreses(db: Kysely<DB>) {
  await db.schema
    .createTable('feligreses')
    .ifNotExists()
    .addColumn('id', 'integer', (col) => col.primaryKey().autoIncrement())
    .addColumn('persona_id', 'integer', (col) =>
      col.notNull().references('personas.id').onDelete('cascade')
    )
    .addColumn('fecha_miembro', 'text', (col) => col.notNull())
    .addColumn('activo', 'integer', (col) => col.notNull().defaultTo(1))
    .addColumn('created_at', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .addColumn('updated_at', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .execute();

  await db.schema
    .createIndex('idx_feligreses_persona_id')
    .on('feligreses')
    .columns(['persona_id'])
    .execute();

  console.log('✅ Migración 002: Tabla feligreses creada');
}

export async function rollback002CreateFeligreses(db: Kysely<DB>) {
  await db.schema.dropTable('feligreses').ifExists().execute();
  console.log('🔄 Rollback 002: Tabla feligreses eliminada');
}
