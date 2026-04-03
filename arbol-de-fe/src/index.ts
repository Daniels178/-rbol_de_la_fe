import express, { Application, Request, Response } from 'express';
import { createServer, Server as HTTPServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
import dotenv from 'dotenv';

import { createDatabase } from './shared/db/database';
import { createPersonasRoutes } from './modules/personas/personas.routes';

// Cargar variables de entorno
dotenv.config();

export class App {
  public app: Application;
  public server: HTTPServer;
  public io: SocketIOServer;
  private dbPath: string;
  private port: number;

  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || '3000', 10);
    this.dbPath = process.env.DB_PATH || './data/arbol-de-fe.db';
    this.server = createServer(this.app);
    
    // Configurar Socket.IO
    this.io = new SocketIOServer(this.server, {
      cors: {
        origin: process.env.CORS_ORIGIN || '*',
        methods: ['GET', 'POST'],
      },
    });

    this.setupMiddleware();
    this.setupRoutes();
    this.setupSocketIO();
    this.setupErrorHandling();
  }

  private setupMiddleware(): void {
    // Seguridad
    this.app.use(helmet());
    
    // Compresión
    this.app.use(compression());
    
    // CORS
    this.app.use(cors({
      origin: process.env.CORS_ORIGIN || '*',
    }));
    
    // JSON parsing
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    
    // Archivos estáticos
    this.app.use(express.static(path.join(__dirname, '../public')));
  }

  private setupRoutes(): void {
    const db = createDatabase(this.dbPath);

    // Health check
    this.app.get('/health', (req: Request, res: Response) => {
      res.json({ status: 'ok', timestamp: new Date().toISOString() });
    });

    // API Routes
    this.app.use('/api/personas', createPersonasRoutes(db));

    // Dashboard route
    this.app.get('/dashboard', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, '../client/dashboard/index.html'));
    });

    // Admin panel route
    this.app.get('/admin', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, '../client/admin/index.html'));
    });

    // Root redirect to dashboard
    this.app.get('/', (req: Request, res: Response) => {
      res.redirect('/dashboard');
    });
  }

  private setupSocketIO(): void {
    this.io.on('connection', (socket) => {
      console.log(`🔌 Cliente conectado: ${socket.id}`);

      socket.on('disconnect', () => {
        console.log(`🔌 Cliente desconectado: ${socket.id}`);
      });

      // Evento de prueba
      socket.on('test', (data) => {
        console.log('📩 Mensaje de prueba recibido:', data);
        socket.emit('test-response', { message: 'Servidor recibió tu mensaje', receivedAt: new Date().toISOString() });
      });
    });
  }

  private setupErrorHandling(): void {
    // 404 handler
    this.app.use((req: Request, res: Response) => {
      res.status(404).json({ error: 'Not Found', path: req.path });
    });

    // Global error handler
    this.app.use((err: Error, req: Request, res: Response, next: any) => {
      console.error('❌ Error no manejado:', err);
      
      res.status(err instanceof Error && 'statusCode' in err ? (err as any).statusCode : 500).json({
        error: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      });
    });
  }

  public start(): void {
    this.server.listen(this.port, () => {
      console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🌳 ÁRBOL DE FE - Sistema de Visualización Misionera    ║
║                                                           ║
║   Servidor corriendo en: http://localhost:${this.port}       ║
║   Dashboard: http://localhost:${this.port}/dashboard          ║
║   Admin Panel: http://localhost:${this.port}/admin            ║
║   API Base: http://localhost:${this.port}/api                 ║
║                                                           ║
║   Environment: ${process.env.NODE_ENV || 'development'}                              ║
║   Database: ${this.dbPath}                                       ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
      `);
    });
  }
}

// Iniciar aplicación
if (require.main === module) {
  const app = new App();
  app.start();
}
