import { Kysely } from 'kysely';
import { DB, Persona, NewPersona, PersonaUpdate } from '../types/database.types';
import { AppError } from '../utils/errors';

export class PersonasRepository {
  constructor(private db: Kysely<DB>) {}

  async findAll(options?: { 
    search?: string; 
    bautizado?: boolean; 
    distrito?: string;
    limit?: number;
    offset?: number;
  }): Promise<Persona[]> {
    let query = this.db.selectFrom('personas').selectAll();

    if (options?.search) {
      const searchTerm = `%${options.search}%`;
      query = query.where(({ or, eb }) =>
        or([
          eb('nombre', 'like', searchTerm),
          eb('apellido', 'like', searchTerm),
        ])
      );
    }

    if (options?.bautizado !== undefined) {
      query = query.where('bautizado', '=', options.bautizado ? 1 : 0);
    }

    if (options?.distrito) {
      query = query.where('distrito', '=', options.distrito);
    }

    query = query.orderBy(['apellido', 'nombre']);

    if (options?.limit) {
      query = query.limit(options.limit);
      if (options?.offset) {
        query = query.offset(options.offset);
      }
    }

    return query.execute();
  }

  async findById(id: number): Promise<Persona | null> {
    const persona = await this.db
      .selectFrom('personas')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();

    return persona || null;
  }

  async create(data: NewPersona): Promise<Persona> {
    const result = await this.db
      .insertInto('personas')
      .values({
        ...data,
        bautizado: data.bautizado ? 1 : 0,
        creado_en: new Date().toISOString(),
        actualizado_en: new Date().toISOString(),
      })
      .returningAll()
      .executeTakeFirst();

    if (!result) {
      throw new AppError('No se pudo crear la persona', 500, 'CREATE_FAILED');
    }

    return result;
  }

  async update(id: number, data: PersonaUpdate): Promise<Persona> {
    const updated = await this.db
      .updateTable('personas')
      .set({
        ...data,
        bautizado: data.bautizado !== undefined ? (data.bautizado ? 1 : 0) : undefined,
        actualizado_en: new Date().toISOString(),
      })
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirst();

    if (!updated) {
      throw AppError.notFound('Persona');
    }

    return updated;
  }

  async delete(id: number): Promise<void> {
    const result = await this.db
      .deleteFrom('personas')
      .where('id', '=', id)
      .executeTakeFirst();

    if (result.numDeletedRows === BigInt(0)) {
      throw AppError.notFound('Persona');
    }
  }

  async findByDistrito(): Promise<Map<string, Persona[]>> {
    const personas = await this.findAll();
    const byDistrito = new Map<string, Persona[]>();

    for (const persona of personas) {
      const distrito = persona.distrito || 'Sin Distrito';
      const existing = byDistrito.get(distrito) || [];
      existing.push(persona);
      byDistrito.set(distrito, existing);
    }

    return byDistrito;
  }

  async count(options?: { bautizado?: boolean }): Promise<number> {
    let query = this.db.selectFrom('personas').select((eb) =>
      eb.fn.count('id').as('total')
    );

    if (options?.bautizado !== undefined) {
      query = query.where('bautizado', '=', options.bautizado ? 1 : 0);
    }

    const result = await query.executeTakeFirstOrThrow();
    return Number(result.total);
  }
}
