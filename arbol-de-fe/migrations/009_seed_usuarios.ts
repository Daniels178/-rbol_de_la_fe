import { Kysely } from 'kysely';
import { DB } from '../types/database.types';

export async function migrate009SeedUsuarios(db: Kysely<DB>) {
  const bcrypt = await import('bcryptjs');
  
  // Crear usuario admin por defecto
  const adminPassword = await bcrypt.hash('admin123', 10);
  const pastorPassword = await bcrypt.hash('pastor123', 10);
  const liderPassword = await bcrypt.hash('lider123', 10);

  await db
    .insertInto('usuarios')
    .values([
      {
        username: 'admin',
        password_hash: adminPassword,
        rol: 'admin',
        pin: '1234',
        activo: 1,
      },
      {
        username: 'pastor',
        password_hash: pastorPassword,
        rol: 'pastor',
        pin: '5678',
        activo: 1,
      },
      {
        username: 'lider',
        password_hash: liderPassword,
        rol: 'lider',
        pin: '9012',
        activo: 1,
      },
    ])
    .execute();

  console.log('✅ Migración 009: Usuarios por defecto creados (admin/admin123, pastor/pastor123, lider/lider123)');
}

export async function rollback009SeedUsuarios(db: Kysely<DB>) {
  await db.deleteFrom('usuarios').execute();
  console.log('🔄 Rollback 009: Usuarios eliminados');
}
