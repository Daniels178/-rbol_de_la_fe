import { Router, Request, Response } from 'express';
import { PersonasRepository } from './personas.repository';
import { Kysely } from 'kysely';
import { DB } from '../../shared/types/database.types';
import { AppError } from '../../shared/utils/errors';

export function createPersonasRoutes(db: Kysely<DB>): Router {
  const router = Router();
  const repository = new PersonasRepository(db);

  // GET /api/personas - Listar todas las personas con filtros opcionales
  router.get('/', async (req: Request, res: Response) => {
    try {
      const { search, bautizado, distrito, limit, offset } = req.query;
      
      const personas = await repository.findAll({
        search: search as string | undefined,
        bautizado: bautizado !== undefined ? bautizado === 'true' : undefined,
        distrito: distrito as string | undefined,
        limit: limit ? parseInt(limit as string) : undefined,
        offset: offset ? parseInt(offset as string) : undefined,
      });

      res.json({ success: true, data: personas });
    } catch (error) {
      console.error('Error al listar personas:', error);
      res.status(500).json({ success: false, error: 'Error interno del servidor' });
    }
  });

  // GET /api/personas/count - Contar personas
  router.get('/count', async (req: Request, res: Response) => {
    try {
      const { bautizado } = req.query;
      
      const total = await repository.count({
        bautizado: bautizado !== undefined ? bautizado === 'true' : undefined,
      });

      res.json({ success: true, data: { total } });
    } catch (error) {
      console.error('Error al contar personas:', error);
      res.status(500).json({ success: false, error: 'Error interno del servidor' });
    }
  });

  // GET /api/personas/:id - Obtener persona por ID
  router.get('/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        throw AppError.badRequest('ID inválido');
      }

      const persona = await repository.findById(id);

      if (!persona) {
        throw AppError.notFound('Persona');
      }

      res.json({ success: true, data: persona });
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ success: false, error: error.message });
      } else {
        console.error('Error al obtener persona:', error);
        res.status(500).json({ success: false, error: 'Error interno del servidor' });
      }
    }
  });

  // POST /api/personas - Crear nueva persona
  router.post('/', async (req: Request, res: Response) => {
    try {
      const { nombre, apellido, telefono, direccion, distrito, estado_civil, fecha_nacimiento, bautizado, fecha_bautismo, lider } = req.body;

      if (!nombre || !apellido) {
        throw AppError.badRequest('Nombre y apellido son requeridos');
      }

      const persona = await repository.create({
        nombre,
        apellido,
        telefono,
        direccion,
        distrito,
        estado_civil,
        fecha_nacimiento,
        bautizado: bautizado || false,
        fecha_bautismo,
        lider,
      });

      res.status(201).json({ success: true, data: persona });
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ success: false, error: error.message });
      } else {
        console.error('Error al crear persona:', error);
        res.status(500).json({ success: false, error: 'Error interno del servidor' });
      }
    }
  });

  // PUT /api/personas/:id - Actualizar persona
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        throw AppError.badRequest('ID inválido');
      }

      const persona = await repository.update(id, req.body);

      res.json({ success: true, data: persona });
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ success: false, error: error.message });
      } else {
        console.error('Error al actualizar persona:', error);
        res.status(500).json({ success: false, error: 'Error interno del servidor' });
      }
    }
  });

  // DELETE /api/personas/:id - Eliminar persona
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        throw AppError.badRequest('ID inválido');
      }

      await repository.delete(id);

      res.json({ success: true, message: 'Persona eliminada correctamente' });
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ success: false, error: error.message });
      } else {
        console.error('Error al eliminar persona:', error);
        res.status(500).json({ success: false, error: 'Error interno del servidor' });
      }
    }
  });

  return router;
}
