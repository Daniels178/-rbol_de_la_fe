import { Generated, Insertable, Selectable, Updateable } from 'kysely';

// ==================== TABLAS PRINCIPALES ====================

export interface PersonasTable {
  id: Generated<number>;
  nombre: string;
  apellido: string;
  telefono?: string;
  direccion?: string;
  distrito?: string;
  estado_civil?: 'soltero' | 'casado' | 'divorciado' | 'viudo';
  fecha_nacimiento?: string;
  bautizado: boolean;
  fecha_bautismo?: string;
  lider?: number; // FK a Personas.id
  creado_en: Generated<string>;
  actualizado_en: Generated<string>;
}

export interface FeligresesTable {
  id: Generated<number>;
  persona_id: number; // FK a Personas.id
  fecha_miembro: string;
  activo: boolean;
  created_at: Generated<string>;
  updated_at: Generated<string>;
}

export interface EstudiosBiblicosTable {
  id: Generated<number>;
  persona_id: number; // FK a Personas.id
  estudiante_nombre: string;
  leccion: string;
  fecha_inicio: string;
  fecha_fin?: string;
  completado: boolean;
  maestro_id?: number; // FK a Personas.id
  created_at: Generated<string>;
  updated_at: Generated<string>;
}

export interface LiteraturaTable {
  id: Generated<number>;
  persona_id: number; // FK a Personas.id
  titulo: string;
  tipo: 'libro' | 'revista' | 'folleto';
  fecha_entrega: string;
  devuelto: boolean;
  fecha_devolucion?: string;
  created_at: Generated<string>;
  updated_at: Generated<string>;
}

// ==================== SISTEMA ABC ====================

export interface ABCCategoriasTable {
  id: Generated<number>;
  nombre: string; // A, B, C
  descripcion: string;
  orden: number;
  created_at: Generated<string>;
}

export interface ABCRegistrosTable {
  id: Generated<number>;
  persona_id: number; // FK a Personas.id
  categoria_id: number; // FK a ABCCategorias.id
  fecha_asignacion: string;
  fecha_visita?: string;
  resultado?: 'interesado' | 'no_interesado' | 'volver_luego' | 'estudio_biblico';
  notas?: string;
  visitador_id?: number; // FK a Personas.id
  created_at: Generated<string>;
  updated_at: Generated<string>;
}

// ==================== USUARIOS Y AUTENTICACIÓN ====================

export interface UsuariosTable {
  id: Generated<number>;
  username: string;
  password_hash: string;
  rol: 'admin' | 'pastor' | 'lider' | 'miembro';
  pin?: string;
  activo: boolean;
  ultimo_acceso?: string;
  created_at: Generated<string>;
  updated_at: Generated<string>;
}

// ==================== DASHBOARD Y ANIMACIONES ====================

export interface DashboardEventosTable {
  id: Generated<number>;
  tipo: 'hoja_verde' | 'hoja_dorada' | 'fruto' | 'celebracion';
  datos: string; // JSON string con datos del evento
  timestamp: Generated<string>;
  procesado: boolean;
}

export interface SnapshotsTable {
  id: Generated<number>;
  nombre: string;
  datos: string; // JSON string completo del dashboard
  fecha_creacion: Generated<string>;
  creado_por: number; // FK a Usuarios.id
}

// ==================== GUARDIANES (ALERTAS) ====================

export interface GuardianesAlertasTable {
  id: Generated<number>;
  tipo: 'inactividad' | 'cumpleanos' | 'aniversario' | 'visita_pendiente';
  persona_id?: number; // FK a Personas.id
  mensaje: string;
  prioridad: 'baja' | 'media' | 'alta';
  leida: boolean;
  fecha_alerta: string;
  fecha_lectura?: string;
  created_at: Generated<string>;
}

// ==================== INTERFAZ PRINCIPAL DB ====================

export interface DB {
  personas: PersonasTable;
  feligreses: FeligresesTable;
  estudios_biblicos: EstudiosBiblicosTable;
  literatura: LiteraturaTable;
  abc_categorias: ABCCategoriasTable;
  abc_registros: ABCRegistrosTable;
  usuarios: UsuariosTable;
  dashboard_eventos: DashboardEventosTable;
  snapshots: SnapshotsTable;
  guardianes_alertas: GuardianesAlertasTable;
}

// ==================== TIPOS DERIVADOS ====================

export type Persona = Selectable<PersonasTable>;
export type NewPersona = Insertable<PersonasTable>;
export type PersonaUpdate = Updateable<PersonasTable>;

export type Feligres = Selectable<FeligresesTable>;
export type NewFeligres = Insertable<FeligresesTable>;

export type EstudioBiblico = Selectable<EstudiosBiblicosTable>;
export type NewEstudioBiblico = Insertable<EstudiosBiblicosTable>;

export type Literatura = Selectable<LiteraturaTable>;
export type NewLiteratura = Insertable<LiteraturaTable>;

export type ABCCategoria = Selectable<ABCCategoriasTable>;
export type NewABCCategoria = Insertable<ABCCategoriasTable>;

export type ABCRegistro = Selectable<ABCRegistrosTable>;
export type NewABCRegistro = Insertable<ABCRegistrosTable>;

export type Usuario = Selectable<UsuariosTable>;
export type NewUsuario = Insertable<UsuariosTable>;

export type DashboardEvento = Selectable<DashboardEventosTable>;
export type NewDashboardEvento = Insertable<DashboardEventosTable>;

export type Snapshot = Selectable<SnapshotsTable>;
export type NewSnapshot = Insertable<SnapshotsTable>;

export type GuardianesAlerta = Selectable<GuardianesAlertasTable>;
export type NewGuardianesAlerta = Insertable<GuardianesAlertasTable>;
