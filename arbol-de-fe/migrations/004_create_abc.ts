import { Kysely } from 'kysely';
import { DB } from '../types/database.types';

export async function migrate004CreateABC(db: Kysely<DB>) {
  // Tabla Categorías ABC
  await db.schema
    .createTable('abc_categorias')
    .ifNotExists()
    .addColumn('id', 'integer', (col) => col.primaryKey().autoIncrement())
    .addColumn('nombre', 'text', (col) => col.notNull())
    .addColumn('descripcion', 'text', (col) => col.notNull())
    .addColumn('orden', 'integer', (col) => col.notNull())
    .addColumn('created_at', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .execute();

  // Insertar categorías por defecto A, B, C
  await db
    .insertInto('abc_categorias')
    .values([
      { nombre: 'A', descripcion: 'Interesados nuevos - Primer contacto', orden: 1 },
      { nombre: 'B', descripcion: 'Interesados en estudio - Clase Alfa', orden: 2 },
      { nombre: 'C', descripcion: 'Listos para bautismo - En proceso', orden: 3 },
    ])
    .execute();

  // Tabla Registros ABC
  await db.schema
    .createTable('abc_registros')
    .ifNotExists()
    .addColumn('id', 'integer', (col) => col.primaryKey().autoIncrement())
    .addColumn('persona_id', 'integer', (col) =>
      col.notNull().references('personas.id').onDelete('cascade')
    )
    .addColumn('categoria_id', 'integer', (col) =>
      col.notNull().references('abc_categorias.id').onDelete('restrict')
    )
    .addColumn('fecha_asignacion', 'text', (col) => col.notNull())
    .addColumn('fecha_visita', 'text')
    .addColumn('resultado', 'text')
    .addColumn('notas', 'text')
    .addColumn('visitador_id', 'integer', (col) =>
      col.references('personas.id').onDelete('set null')
    )
    .addColumn('created_at', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .addColumn('updated_at', 'text', (col) =>
      col.notNull().defaultTo(new Date().toISOString())
    )
    .execute();

  await db.schema
    .createIndex('idx_abc_persona_id')
    .on('abc_registros')
    .columns(['persona_id'])
    .execute();

  await db.schema
    .createIndex('idx_abc_categoria_id')
    .on('abc_registros')
    .columns(['categoria_id'])
    .execute();

  console.log('✅ Migración 004: Tablas ABC creadas con categorías por defecto');
}

export async function rollback004CreateABC(db: Kysely<DB>) {
  await db.schema.dropTable('abc_registros').ifExists().execute();
  await db.schema.dropTable('abc_categorias').ifExists().execute();
  console.log('🔄 Rollback 004: Tablas ABC eliminadas');
}
