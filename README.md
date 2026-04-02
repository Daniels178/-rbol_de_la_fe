# 🌳 Árbol de Fe — Documentación Técnica Completa

> **Sistema de Visualización Misionera** para la Iglesia Adventista del Séptimo Día  
> Asociación de Baja California · Distrito Tijuana  
> Versión del documento: `1.0.0` · Estado: `Planificación / Pre-desarrollo`

---

## Tabla de Contenidos

1. [Visión General del Proyecto](#1-visión-general-del-proyecto)
2. [Metáfora Visual y Filosofía de Diseño](#2-metáfora-visual-y-filosofía-de-diseño)
3. [Stack Tecnológico Completo](#3-stack-tecnológico-completo)
4. [Arquitectura del Sistema](#4-arquitectura-del-sistema)
5. [Estructura Modular del Proyecto](#5-estructura-modular-del-proyecto)
6. [Esquema Completo de Base de Datos](#6-esquema-completo-de-base-de-datos)
7. [Dashboard — Escena 1: El Árbol](#7-dashboard--escena-1-el-árbol)
8. [Dashboard — Escena 2: Analítica Profesional](#8-dashboard--escena-2-analítica-profesional)
9. [Panel de Administración](#9-panel-de-administración)
10. [Sistema de Lista ABC](#10-sistema-de-lista-abc)
11. [Registro Expandido de Contactos Misioneros](#11-registro-expandido-de-contactos-misioneros)
12. [Módulo de Feligresía](#12-módulo-de-feligresía)
13. [Sistema de Guardianes y Alertas](#13-sistema-de-guardianes-y-alertas)
14. [Métricas de Salud de la Congregación](#14-métricas-de-salud-de-la-congregación)
15. [Control de Literatura](#15-control-de-literatura)
16. [Actas de Victoria (Automatizadas)](#16-actas-de-victoria-automatizadas)
17. [Sistema de Snapshots y Períodos](#17-sistema-de-snapshots-y-períodos)
18. [Sistema de Roles y Permisos](#18-sistema-de-roles-y-permisos)
19. [API REST — Especificación de Endpoints](#19-api-rest--especificación-de-endpoints)
20. [Sistema de Tiempo Real (WebSocket)](#20-sistema-de-tiempo-real-websocket)
21. [Algoritmos Clave de Visualización](#21-algoritmos-clave-de-visualización)
22. [Sistema de Diseño UI/UX](#22-sistema-de-diseño-uiux)
23. [DevOps, Infraestructura y Despliegue](#23-devops-infraestructura-y-despliegue)
24. [Roadmap de Desarrollo por Fases](#24-roadmap-de-desarrollo-por-fases)
25. [Estructura de Archivos del Proyecto](#25-estructura-de-archivos-del-proyecto)
26. [Guía de Contribución y Convenciones](#26-guía-de-contribución-y-convenciones)

---

## 1. Visión General del Proyecto

### ¿Qué es "Árbol de Fe"?

**Árbol de Fe** es un sistema de software de código propietario diseñado para la Iglesia Adventista del Séptimo Día de Baja California. Su propósito es transformar los datos del trabajo misionero — específicamente del programa de estudios bíblicos "Fe de Jesús" — en una experiencia visual poderosa, emocionalmente significativa y analíticamente robusta.

El sistema opera en dos contextos simultáneos y complementarios:

1. **El Dashboard Visual (Proyector):** Una pantalla cinematográfica, diseñada para ser proyectada ante la congregación durante los *"10 Minutos Misioneros"*, que convierte cada progreso espiritual en una metáfora visual viva: hojas que nacen en un árbol, que se transforman, que dan fruto.

2. **El Panel de Administración (Operador):** Una herramienta de gestión de datos completa, construida con los más altos estándares de UX profesional (siguiendo el sistema de diseño "Pacífico Estructurado" de Eventos BC), que permite a líderes y pastores gestionar contactos misioneros, feligresía, literatura, instrucción bíblica, y analítica de salud congregacional.

### Objetivos Principales

- Motivar a la congregación al ver visualmente el fruto del trabajo misionero en tiempo real.
- Proveer a los líderes pastorales una herramienta de gestión y seguimiento misionero profesional, sin fricción tecnológica.
- Sistematizar los datos de la Lista ABC, los estudios bíblicos, y los bautismos.
- Identificar proactivamente cuellos de botella: contactos sin instructor asignado, estudios estancados, grupos pequeños inactivos en la misión.
- Construir una memoria institucional del trabajo misionero a través de períodos y snapshots históricos.

### Principios de Diseño del Sistema

| Principio | Descripción |
|-----------|-------------|
| **Claridad sobre Ruido** | Los datos deben ser entendibles de un vistazo. Sin complejidad innecesaria. |
| **No-Code First** | Cualquier operación del día a día debe ser ejecutable por un usuario sin conocimientos técnicos. |
| **Tiempo Real** | Cualquier cambio en el admin se refleja instantáneamente en el dashboard proyectado. |
| **Metáfora Viva** | El árbol no es un gráfico. Es una representación espiritual con vida propia: respira, crece, da fruto. |
| **Memoria Institucional** | Nada se pierde. Todo queda registrado, versionado y restaurable. |
| **Contraste para Proyector** | Todo elemento del dashboard está calibrado para máxima legibilidad bajo luz solar directa sobre pantalla de proyección. |

---

## 2. Metáfora Visual y Filosofía de Diseño

### Los Cuatro Elementos Visuales

El sistema orbita alrededor de cuatro elementos visuales con semántica precisa:

| Elemento | Representación | Estado | Descripción |
|----------|---------------|--------|-------------|
| 🌳 **El Árbol** | La iglesia | Siempre presente | Representa a la congregación y el ciclo misionero activo. Sus ramas son permanentes. |
| 🍃 **Hoja Verde** | Contacto Misionero | `ESTUDIANDO` | Nace en una rama cuando se registra una persona que estudia la Fe de Jesús. Lleva el nombre de la persona. |
| 🍂 **Hoja Dorada** | Decisión de Bautismo | `DECIDIDO` | La hoja verde se transforma en dorada cuando la persona toma la decisión de bautizarse. El nombre desaparece pero la hoja permanece. |
| 🍎 **Manzana en Canasta** | Bautismo Concretado | `BAUTIZADO` | Cuando el bautismo se realiza, aparece una manzana en la canasta con el nombre de la persona. |

### La Transición Verde → Dorada

Esta es la transición más importante del sistema. Cuando una persona pasa de `ESTUDIANDO` a `DECIDIDO`:
- La hoja **no desaparece** ni se mueve.
- El **nombre se desvanece** gradualmente (los nombres en las hojas doradas deben permanecer en el sistema pero invisibles en el dashboard, para proteger la privacidad durante la proyección pública).
- El **color cambia** de verde a dorado con una animación de shimmer.
- La hoja dorada no migra a la canasta todavía. Solo lo hace cuando el **bautismo se concreta**.

### La Celebración del Bautismo

El momento más especial del sistema. Descrito en detalle en §7.5.

### El Árbol SVG — Inspiración de Forma

El árbol de referencia (archivo `árbol-sin-hojas.webp`) presenta las siguientes características que el sistema debe replicar fielmente en SVG:

- **Tronco:** Ancho en la base (~80px), que se estrecha hacia arriba. Ligera curvatura central. Sólido y grueso.
- **División principal:** Aproximadamente al 40% de la altura total, dividiéndose en una rama dominante izquierda (más larga y baja) y una derecha (más corta y alta).
- **Ramas secundarias:** Cada rama principal se divide en 2-3 ramas secundarias, y estas en ramillas terciarias.
- **Puntas:** Delgadas, con terminaciones irregulares y múltiples bifurcaciones finales.
- **Asimetría:** El árbol es deliberadamente asimétrico, lo que le da carácter orgánico y natural.
- **Puntos de spawning de hojas:** Se definirán **33 puntos pre-calculados** en las puntas de todas las ramas, donde las hojas pueden crecer. El algoritmo de filotaxis selecciona cuál usar para cada nueva hoja.

---

## 3. Stack Tecnológico Completo

### Lenguaje Base

**TypeScript 5.x** en todo el backend. Proporciona seguridad de tipos, mejor mantenibilidad, y es el estándar de la industria para proyectos Node.js de mediano y largo plazo.

### Backend

| Tecnología | Versión | Rol |
|-----------|---------|-----|
| **Node.js** | 20 LTS | Runtime principal del servidor |
| **Express.js** | 4.x | Framework HTTP — servidor de API REST y páginas estáticas |
| **Socket.io** | 4.x | WebSocket — comunicación bidireccional en tiempo real |
| **better-sqlite3** | Latest | Driver SQLite de alto rendimiento (síncrono, ideal para SQLite) |
| **Kysely** | Latest | Query builder con tipado completo para TypeScript |
| **node-cron** | Latest | Tareas programadas (backups automáticos, alertas) |
| **zod** | Latest | Validación de esquemas de datos en runtime |
| **bcrypt** | Latest | Hash de PINs de acceso por rol |
| **csv-parse** | Latest | Importación de feligresía vía archivo CSV |
| **puppeteer** | Latest | Generación de capturas PNG/PDF del dashboard para exportación |

### Frontend — Dashboard (Proyector)

| Tecnología | Versión | Rol |
|-----------|---------|-----|
| **HTML5 + SVG** | — | Árbol dinámico, hojas, canasta, manzanas — todo SVG vectorial |
| **GSAP (GreenSock)** | 3.x | Todas las animaciones del árbol y eventos especiales |
| **JavaScript Vanilla** | ES2022 | Lógica del cliente — sin frameworks, máximo rendimiento |
| **Socket.io Client** | 4.x | Recepción de eventos en tiempo real desde el servidor |
| **CSS3** | — | Microanimaciones de balanceo, shimmer, flotación (complemento a GSAP) |

### Frontend — Panel de Administración

| Tecnología | Versión | Rol |
|-----------|---------|-----|
| **HTML5** | — | Estructura base |
| **Alpine.js** | 3.x | Reactividad ligera — formularios, modales, listas dinámicas |
| **Plus Jakarta Sans + Inter** | Google Fonts | Tipografía del sistema de diseño "Pacífico Estructurado" |
| **CSS Custom Properties** | — | Sistema de tokens de diseño — modo claro y oscuro |
| **Chart.js** | 4.x | Gráficos en la Escena 2 del dashboard y métricas del admin |

### Empaquetado Desktop

| Tecnología | Versión | Rol |
|-----------|---------|-----|
| **Electron** | 29.x | Empaquetado como aplicación de escritorio (.exe / .dmg) |
| **electron-builder** | Latest | Build y distribución multiplataforma |

### Infraestructura

| Tecnología | Versión | Rol |
|-----------|---------|-----|
| **Docker** | 24.x | Contenedores para despliegue en red local |
| **Docker Compose** | 2.x | Orquestación de servicios |
| **Nginx Alpine** | Latest | Reverse proxy en despliegue Docker |
| **Portainer CE** | Latest | UI visual no-code para gestión de Docker |

### Herramientas de Desarrollo

| Herramienta | Rol |
|-------------|-----|
| **tsx** | Ejecución de TypeScript sin compilación previa (desarrollo) |
| **esbuild** | Bundling ultrarrápido para producción |
| **Vitest** | Testing unitario |
| **ESLint + Prettier** | Calidad y formato de código |
| **Husky + lint-staged** | Pre-commit hooks |

---

## 4. Arquitectura del Sistema

### Patrón General: Monolito Modular

El sistema adopta una arquitectura de **Monolito Modular**, no microservicios. Esta decisión es deliberada:

- El volumen de datos y carga esperada (decenas de usuarios simultáneos máximo) no justifica la complejidad operacional de microservicios.
- Un monolito bien modularizado es más fácil de desplegar, mantener y depurar para un equipo pequeño.
- Todos los módulos comparten el mismo proceso Node.js pero están estrictamente desacoplados mediante interfaces TypeScript bien definidas.

### Patrones Arquitectónicos Utilizados

#### 1. Command Pattern
Cada acción del panel de administración (agregar persona, cambiar estado, registrar bautismo, etc.) se encapsula como un objeto `Command`. Esto permite:
- **Undo/Redo:** Las últimas 10 acciones son reversibles durante 60 segundos.
- **Log de Auditoría:** Cada comando queda registrado automáticamente en `tabla: log_eventos`.
- **Testing:** Los comandos pueden ser ejecutados y probados de forma aislada.

```typescript
// Ejemplo de estructura de Command
interface Command<T> {
  execute(payload: T): Promise<CommandResult>;
  undo(commandId: string): Promise<void>;
  validate(payload: T): ValidationResult;
}
```

#### 2. Event Sourcing (Ligero)
No es Event Sourcing puro, pero el `log_eventos` registra **todos** los cambios de estado del sistema con timestamp, actor, y payload completo. Esto permite reconstruir el estado del sistema en cualquier punto del tiempo y es la base de la funcionalidad de snapshots.

#### 3. Observer / Pub-Sub (via Socket.io)
Cuando el servidor procesa un comando y actualiza la base de datos, emite un evento nombrado via Socket.io a todos los clientes conectados. Los clientes suscritos (dashboard del proyector, panel admin en otras pantallas, tablets del pastor) reaccionan al evento actualizando su UI.

```
Admin Panel → HTTP POST /api/persons → Express Handler → Command Handler
→ SQLite Update → Socket.io emit('person:added', payload) → Todos los clientes
→ Dashboard actualiza árbol SVG + Admin actualiza lista
```

#### 4. Repository Pattern
La capa de acceso a datos está completamente abstraída detrás de repositorios. La lógica de negocio nunca hace queries SQL directamente; siempre llama a métodos del repositorio correspondiente. Esto hace que el sistema sea intercambiable a otra base de datos en el futuro sin tocar la lógica de negocio.

```typescript
// La lógica de negocio solo conoce esta interfaz:
interface PersonRepository {
  findAll(filters: PersonFilters): Promise<Person[]>;
  findById(id: number): Promise<Person | null>;
  create(data: CreatePersonDTO): Promise<Person>;
  updateStatus(id: number, status: PersonStatus): Promise<Person>;
  delete(id: number): Promise<void>;
}
```

#### 5. Snapshot Pattern
El estado completo del sistema puede ser serializado como un objeto JSON en cualquier momento. Este JSON se almacena en la base de datos como parte del registro de un `Periodo`. Un snapshot incluye: todas las personas y sus estados, posiciones calculadas de hojas y manzanas, configuración visual activa, y estadísticas del período.

### Flujo de Datos Principal

```
[Usuario en Admin Panel]
        │
        ▼ HTTP POST /api/[resource]
[Express.js Router]
        │
        ▼
[Zod Validation Middleware]
        │
        ▼
[Command Handler]
        ├── Valida reglas de negocio
        ├── Escribe en SQLite via Kysely
        ├── Escribe en log_eventos
        └── Emite evento Socket.io
                │
                ▼ WebSocket broadcast
        ┌───────┴───────────┐
        ▼                   ▼
[Dashboard SVG]     [Otros Admin Panels]
  Actualiza árbol     Actualiza listas
```

### Despliegue: Dos Modalidades

#### Modalidad A — Electron (Uso típico, sin Docker)
```
[Computadora del operador]
  └── Electron App
        ├── Servidor Node.js interno (puerto 3000)
        ├── Ventana 1: Panel Admin (pantalla principal)
        └── Ventana 2: Dashboard (pantalla secundaria / proyector)
```
El operador simplemente abre la aplicación. No requiere Docker, no requiere terminal, no requiere ninguna configuración. Todo está empaquetado dentro del instalador.

#### Modalidad B — Docker (Red local de la iglesia)
```
[Mini-PC / NUC Intel / Raspberry Pi 5 de la iglesia]
  └── Docker Engine
        ├── contenedor: arbol-app (Node.js, puerto 3000 interno)
        ├── contenedor: arbol-nginx (puerto 80 → arbol-app:3000)
        ├── contenedor: portainer (puerto 9000)
        ├── contenedor: backup-cron (copia db cada 6h)
        └── volumen: db-data (persiste arbol.db y backups/)

[Red Wi-Fi local de la iglesia]
  ├── Laptop Admin → http://192.168.x.x/admin
  ├── Proyector → http://192.168.x.x/dashboard
  ├── Tablet del pastor → http://192.168.x.x/admin
  └── Portainer → http://192.168.x.x:9000
```

---

## 5. Estructura Modular del Proyecto

El proyecto está organizado en módulos con responsabilidades claras. Cada módulo tiene su propio directorio, sus propias interfaces TypeScript, sus propios tests, y no accede directamente al código de otros módulos (solo a sus interfaces públicas).

### Módulos del Backend

| Módulo | Directorio | Responsabilidad |
|--------|-----------|----------------|
| **M01 · Servidor** | `src/server/` | Inicialización de Express, Socket.io, middleware global |
| **M02 · Auth** | `src/auth/` | Gestión de PINs por rol, middleware de autorización |
| **M03 · Personas** | `src/persons/` | CRUD de contactos misioneros, máquina de estados |
| **M04 · Feligresía** | `src/members/` | CRUD de miembros de iglesia, importación CSV |
| **M05 · Lista ABC** | `src/abc-list/` | Clasificación ABC, timeline de categorías, alertas |
| **M06 · Estudios Bíblicos** | `src/bible-studies/` | Progreso de lecciones, instructores, grupos pequeños |
| **M07 · Literatura** | `src/literature/` | Registro y control de literatura distribuida |
| **M08 · Snapshots** | `src/snapshots/` | Serialización de estado, gestión de períodos |
| **M09 · Sincronización** | `src/realtime/` | Capa Socket.io, gestión de rooms y broadcast |
| **M10 · Analítica** | `src/analytics/` | Cálculo de métricas, salud congregacional |
| **M11 · Alertas** | `src/alerts/` | Motor de alertas (guardianes, estancamientos, ABC) |
| **M12 · Log de Eventos** | `src/audit/` | Registro de auditoría de todas las acciones |
| **M13 · Configuración** | `src/config/` | Parámetros del sistema, versículos, períodos |
| **M14 · Exportación** | `src/export/` | Actas de victoria, capturas PNG del dashboard |

### Módulos del Frontend

| Módulo | Directorio | Responsabilidad |
|--------|-----------|----------------|
| **F01 · Dashboard Scene 1** | `client/dashboard/scene1/` | Árbol SVG animado, hojas, canasta, tabla de stats |
| **F02 · Dashboard Scene 2** | `client/dashboard/scene2/` | Analítica profesional, indicador de impacto, tabla ABC |
| **F03 · Admin · Personas** | `client/admin/persons/` | Lista, formulario expandido, búsqueda, cambio de estado |
| **F04 · Admin · Miembros** | `client/admin/members/` | Feligresía, importación CSV, autocomplete |
| **F05 · Admin · ABC** | `client/admin/abc/` | Clasificación, timeline visual, flags de alerta |
| **F06 · Admin · Literatura** | `client/admin/literature/` | Registro de distribución de literatura |
| **F07 · Admin · Analítica** | `client/admin/analytics/` | Gráficos de salud congregacional |
| **F08 · Admin · Snapshots** | `client/admin/snapshots/` | Gestión de períodos, restaurar históricos |
| **F09 · Admin · Config** | `client/admin/config/` | Versículos, nombre del período, configuración visual |
| **F10 · Árbol SVG Engine** | `client/shared/tree-engine/` | Lógica de filotaxis, GSAP, puntos de spawning |
| **F11 · Canasta Engine** | `client/shared/basket-engine/` | Circle packing de manzanas |

---

## 6. Esquema Completo de Base de Datos

El sistema utiliza **SQLite** como base de datos. Un único archivo `.db` contiene toda la información. Este archivo es el corazón del sistema — su respaldo es crítico.

### Diagrama de Tablas (Relaciones)

```
periodos ──────────────────────┐
                                │
feligresia ─────────────────┐  │
    ↑ (autocomplete)         │  │
personas ───────────────────┤  │
    │ 1:N                   │  │
estudios_biblicos ──────────┘  │
    │ 1:N                       │
progreso_lecciones             │
                                │
lista_abc ───────────────────┐ │
    │ 1:N                    │  │
abc_historial ───────────────┘ │
                                │
literatura ─────────────────── ┘
                                
log_eventos (global)
config (global)
versiculos (global)
```

### Definición de Tablas

#### `periodos`
Representa un ciclo misionero (ej. "Primer Semestre 2025"). Todo el trabajo misionero pertenece a un período.

```sql
CREATE TABLE periodos (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre          TEXT    NOT NULL,           -- "Primer Semestre 2025"
  descripcion     TEXT,
  fecha_inicio    DATE    NOT NULL,
  fecha_fin       DATE,                       -- NULL si está activo
  activo          BOOLEAN NOT NULL DEFAULT 1, -- Solo uno puede estar activo
  snapshot_json   TEXT,                       -- JSON completo al cerrar el período
  creado_en       DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

#### `feligresia`
Base de datos de los miembros de la iglesia. Sirve como catálogo para el autocomplete de instructores bíblicos.

```sql
CREATE TABLE feligresia (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre          TEXT    NOT NULL,
  apellido_pat    TEXT    NOT NULL,
  apellido_mat    TEXT,
  nombre_busqueda TEXT    NOT NULL, -- CONCAT normalizado para búsqueda fuzzy
  edad            INTEGER,
  sexo            TEXT    CHECK(sexo IN ('M', 'F', 'otro')),
  num_grupo       INTEGER,          -- Número del Grupo Pequeño
  activo          BOOLEAN NOT NULL DEFAULT 1,
  importado_csv   BOOLEAN DEFAULT 0,
  creado_en       DATETIME DEFAULT CURRENT_TIMESTAMP,
  actualizado_en  DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_feligresia_busqueda ON feligresia(nombre_busqueda);
```

#### `personas`
El núcleo del sistema. Cada fila es un contacto misionero (persona que estudia o estudió la Fe de Jesús).

```sql
CREATE TABLE personas (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  periodo_id      INTEGER NOT NULL REFERENCES periodos(id),

  -- Datos de identificación
  nombre          TEXT    NOT NULL,
  edad            INTEGER,
  sexo            TEXT    CHECK(sexo IN ('M', 'F', 'otro')),
  
  -- Datos de contacto
  medio_contacto  TEXT    CHECK(medio_contacto IN ('telefono', 'correo', 'hermano')),
  telefono        TEXT,
  correo          TEXT,
  hermano_ref_id  INTEGER REFERENCES feligresia(id), -- Si medio es 'hermano'
  ubicacion       TEXT,   -- Referencia de ubicación de su casa (no coords GPS)
  
  -- Estado misionero
  estado          TEXT    NOT NULL DEFAULT 'estudiando'
                  CHECK(estado IN ('estudiando', 'decidido', 'bautizado', 'inactivo')),

  -- Datos de visualización (árbol SVG)
  hoja_index      INTEGER UNIQUE, -- Posición filotaxis asignada (inmutable una vez fijada)
  hoja_posicion_x REAL,           -- Coordenada calculada X de la hoja
  hoja_posicion_y REAL,           -- Coordenada calculada Y de la hoja

  -- Timestamps de cambios de estado
  fecha_inicio_estudio  DATETIME,
  fecha_decision        DATETIME, -- Cuándo pasó a 'decidido'
  fecha_bautismo        DATETIME, -- Cuándo pasó a 'bautizado'
  fecha_inactivo        DATETIME, -- Cuándo se marcó inactivo

  -- Notas privadas (solo visibles en admin)
  notas_privadas  TEXT,
  
  -- Clasificación ABC (referenciada también en tabla lista_abc)
  clasificacion_abc TEXT CHECK(clasificacion_abc IN ('A', 'B', 'C', NULL)),
  
  -- Indicadores especiales
  oracion_activa  BOOLEAN DEFAULT 0,  -- Modo "ciclo de oración" activo
  guardian_asignado BOOLEAN DEFAULT 0, -- Tiene instructor bíblico asignado

  creado_en       DATETIME DEFAULT CURRENT_TIMESTAMP,
  actualizado_en  DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_personas_periodo ON personas(periodo_id);
CREATE INDEX idx_personas_estado ON personas(estado);
```

#### `estudios_biblicos`
Registro detallado del estudio bíblico de cada persona. Una persona puede tener un registro por cada etapa de su estudio.

```sql
CREATE TABLE estudios_biblicos (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  persona_id      INTEGER NOT NULL REFERENCES personas(id) ON DELETE CASCADE,

  -- Curso actual
  curso           TEXT    NOT NULL CHECK(curso IN ('basico', 'avanzado')),
  -- 'basico' = 26 lecciones | 'avanzado' (post-bautismal) = 10 lecciones

  leccion_actual  INTEGER NOT NULL DEFAULT 1,
  leccion_final   INTEGER,    -- NULL si aún en curso. Indica hasta dónde llegó.
  completado      BOOLEAN DEFAULT 0,

  -- Días y frecuencia
  dias_estudio    TEXT,       -- JSON array: ["lunes", "miercoles"]

  -- Instructor(es) bíblico(s) — hasta 2 instructores
  instructor1_id  INTEGER REFERENCES feligresia(id),
  instructor2_id  INTEGER REFERENCES feligresia(id),

  -- Grupo Pequeño (se autocompleta del instructor)
  num_grupo       INTEGER,

  -- Historial de completitud
  fecha_inicio    DATE    NOT NULL,
  fecha_fin       DATE,

  creado_en       DATETIME DEFAULT CURRENT_TIMESTAMP,
  actualizado_en  DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

#### `progreso_lecciones`
Registro granular de cada lección completada (para el medidor de progreso visual).

```sql
CREATE TABLE progreso_lecciones (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  estudio_id      INTEGER NOT NULL REFERENCES estudios_biblicos(id) ON DELETE CASCADE,
  num_leccion     INTEGER NOT NULL,
  completada_en   DATE    NOT NULL,
  UNIQUE(estudio_id, num_leccion)
);
```

#### `lista_abc`
Clasificación de contactos según el sistema ABC de la IASD. Incluye timeline completo.

```sql
CREATE TABLE lista_abc (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  persona_id      INTEGER NOT NULL REFERENCES personas(id) ON DELETE CASCADE,
  periodo_id      INTEGER NOT NULL REFERENCES periodos(id),
  clasificacion   TEXT    NOT NULL CHECK(clasificacion IN ('A', 'B', 'C')),
  fecha_inicio    DATE    NOT NULL,
  fecha_fin       DATE,           -- NULL si es la clasificación actual
  es_actual       BOOLEAN DEFAULT 1,
  notas           TEXT,
  registrado_por  INTEGER REFERENCES feligresia(id),
  creado_en       DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_abc_persona ON lista_abc(persona_id);
CREATE INDEX idx_abc_periodo ON lista_abc(periodo_id);
```

**Nota:** La clasificación ABC de la IASD es:
- **A:** Personas con apertura total al evangelio, listos para tomar decisiones.
- **B:** Personas con interés moderado, necesitan más cultivo y acompañamiento.
- **C:** Personas en etapa inicial de contacto, campo de amistad y servicio.

#### `alertas`
Alertas generadas automáticamente por el motor de alertas.

```sql
CREATE TABLE alertas (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  tipo            TEXT NOT NULL CHECK(tipo IN (
                    'sin_guardian',       -- Persona sin instructor asignado
                    'estancamiento_abc',  -- Lleva N meses sin avanzar en ABC
                    'estancamiento_lec',  -- Lleva N semanas sin avanzar en lecciones
                    'sin_contacto',       -- No se ha registrado actividad en X días
                    'guardian_ausente'    -- Instructor no reporta actividad
                  )),
  persona_id      INTEGER REFERENCES personas(id),
  descripcion     TEXT    NOT NULL,
  resuelta        BOOLEAN DEFAULT 0,
  resuelta_en     DATETIME,
  resuelta_por    INTEGER REFERENCES feligresia(id),
  creado_en       DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

#### `literatura`
Control de toda la literatura distribuida por la congregación.

```sql
CREATE TABLE literatura (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  periodo_id      INTEGER REFERENCES periodos(id),
  tipo_material   TEXT    NOT NULL,   -- "Libro", "Revista Señales", "Tratado", etc.
  titulo          TEXT    NOT NULL,
  cantidad        INTEGER NOT NULL DEFAULT 1,
  fecha           DATE    NOT NULL,
  distribuido_a   TEXT,               -- Nombre o descripción del receptor
  distribuidor_id INTEGER REFERENCES feligresia(id),
  ubicacion       TEXT,               -- Lugar donde se distribuyó
  notas           TEXT,
  creado_en       DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

#### `log_eventos`
Registro de auditoría inmutable de todas las acciones del sistema.

```sql
CREATE TABLE log_eventos (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  accion          TEXT    NOT NULL,   -- "persona_creada", "estado_cambiado", etc.
  entidad         TEXT,               -- "persona", "literatura", "snapshot"
  entidad_id      INTEGER,
  payload_antes   TEXT,               -- JSON del estado anterior
  payload_despues TEXT,               -- JSON del estado nuevo
  actor_pin_rol   TEXT,               -- Rol que ejecutó la acción
  ip_origen       TEXT,
  creado_en       DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

#### `config`
Pares clave-valor de configuración del sistema.

```sql
CREATE TABLE config (
  clave   TEXT PRIMARY KEY,
  valor   TEXT NOT NULL
);
-- Claves predefinidas:
-- 'nombre_congregacion', 'nombre_distrito', 'tema_dashboard',
-- 'versiculos_activos', 'qr_activo', 'qr_url', 'modo_proyector',
-- 'duracion_versiculos_seg', 'alertas_estancamiento_dias_abc',
-- 'alertas_sin_guardian_horas'
```

#### `versiculos`
Versículos bíblicos configurables para el dashboard.

```sql
CREATE TABLE versiculos (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  texto     TEXT    NOT NULL,
  referencia TEXT   NOT NULL,   -- "Juan 3:16"
  activo    BOOLEAN DEFAULT 1,
  orden     INTEGER DEFAULT 0
);
```

---

## 7. Dashboard — Escena 1: El Árbol

La Escena 1 es la vista principal del dashboard, proyectada ante la congregación durante los 10 Minutos Misioneros. Es pura metáfora visual.

### 7.1 Composición de la Pantalla

El dashboard ocupa el 100% del viewport en proporción fija **16:9**. Los elementos se distribuyen así:

```
┌─────────────────────────────────────────────────────┐
│ [TÍTULO PERÍODO]   esquina sup. izquierda           │
│                                                     │
│                 [TABLA DE ESTADÍSTICAS]  sup. der.  │
│                                                     │
│                                                     │
│        [EL ÁRBOL CENTRAL]                           │
│         con hojas verdes y doradas                  │
│                                                     │
│                                  [CANASTA]          │
│                                  [+ manzanas]       │
│                                                     │
│ [VERSÍCULO ROTATIVO]     [QR]   esquina inf. der.   │
│ [CONTADOR DÍAS]          ──────────────────────     │
│                                                     │
│                          [BOTÓN → Escena 2]         │
└─────────────────────────────────────────────────────┘
```

### 7.2 Especificaciones de Cada Elemento

#### El Árbol SVG
- Ocupa el **60% del ancho** y el **75% del alto** del viewport.
- Centrado horizontalmente, anclado al suelo (ligeramente a la izquierda del centro para dar espacio a la canasta a la derecha).
- El árbol es un `<path>` SVG complejo que replica la silueta del árbol de referencia.
- Color del árbol: `#3D200A` (madera oscura) sobre fondo `#0a1c0f` (verde noche profundo).
- Microanimación de brisa: las ramas delgadas tienen una oscilación de ±0.5° con `CSS transform: rotate()`, ciclos de 4-7 segundos variados.
- **33 puntos de spawning** pre-calculados en las puntas de ramas. Cada punto tiene coordenadas `(x, y)` en el sistema SVG y un ID único.

#### Hojas Verdes (`estado = 'estudiando'`)
- Forma: Elipse orgánica SVG (`<ellipse>`) con peciolo, rotada levemente.
- Color de relleno: `#2B8500` (verde marca).
- Venas: líneas `#1a5500` más oscuras.
- El **nombre de la persona** se muestra en `#CCFF99` (verde hielo brillante), fuente Noto Sans Bold, tamaño mínimo 11px.
- Microanimación: balanceo `rotate(-3deg)` ↔ `rotate(3deg)`, ciclo 3-5 segundos, origen en el peciolo.
- Cada hoja tiene su `hoja_index` que determina su posición por filotaxis (ver §21).

#### Hojas Doradas (`estado = 'decidido'`)
- Misma forma que la hoja verde.
- Color de relleno: `#D4A017` animando a `#F0C040` (shimmer sutil).
- El nombre **no aparece** (protección de privacidad durante proyección pública).
- Microanimación de shimmer: `opacity 1.0 → 0.75 → 1.0`, ciclo 2.5 segundos.
- La posición de la hoja permanece idéntica a cuando era verde.

#### La Canasta
- Forma: Un rectángulo redondeado estilizado simulando una canasta de mimbre.
- Color base: `#5C3010` (madera oscura) con líneas verticales finas `#3D200A` simulando el tejido del mimbre.
- Dimensiones: adaptativas al número de manzanas (crece verticalmente si hay muchas).
- Posicionada en la esquina inferior derecha del árbol.

#### Manzanas (`estado = 'bautizado'`)
- Forma: Círculo SVG con un highlight blanco semitransparente en la parte superior izquierda (para dar sensación de volumen).
- Peciolo: Un pequeño trazo marrón en la parte superior.
- Color: `#C41E1E` (rojo intenso), highlight `#E03030`.
- El **nombre** aparece en `#FFFFFF` Bold, centrado en la manzana, fuente mínima 9px.
- Microanimación de flotación: ±2px vertical, ciclo 3-5 segundos variados.
- Distribución: circle packing triangular (ver §21).

#### Tabla de Estadísticas (Esquina Superior Derecha)
- Fondo: `rgba(0, 0, 0, 0.72)` con borde `#2B8500` de 1.5px.
- Border-radius: 12px.
- Tres filas, cada una con un ícono SVG de color, texto descriptivo, y el número en `#FFFFFF` Bold 30-36px.
  - Fila 1 (Ícono hoja verde): "Estudiando Fe de Jesús" · Número en verde.
  - Fila 2 (Ícono hoja dorada): "Desean bautizarse" · Número en dorado.
  - Fila 3 (Ícono manzana/gota): "Bautizados" · Número en rojo.
- Los números tienen animación de "rolling" cuando cambian (dígitos que suben como un odómetro).

#### Versículo Bíblico Rotativo
- Posición: Barra en la parte inferior, a la izquierda de la pantalla.
- Fondo semitransparente oscuro.
- Tipografía: Noto Sans, tamaño relativo al largo del versículo (máx. 20px, mín. 14px).
- Color: `#C5E7EA` (Verde Hielo del brand guidelines).
- Rotación: cada N segundos (configurable, default 30s) con fade-out/fade-in.
- Solo se muestra si hay versículos configurados y el módulo está activo.

#### Contador de Días del Período
- Posición: Debajo del versículo.
- Texto: "Día [N] del período · [Nombre del Período]"
- Tipografía pequeña, color muy oscuro `#1a3a20`.

#### Código QR (Activable)
- Posición: Esquina inferior derecha, encima del botón de escena.
- Se genera dinámicamente con la URL de acceso en red local.
- Solo visible si está activado desde la configuración.
- Tamaño: ~80x80px en la pantalla proyectada (equivalente a ~6cm físicos).

#### Botón Escena 2 (→)
- Posición: Esquina inferior derecha.
- Apariencia: Círculo semitransparente con flecha `→`.
- Color: `rgba(0, 118, 128, 0.6)` (teal corporativo).
- Al hacer clic (desde el panel admin o desde el dispositivo del presentador), hace una transición suave a la Escena 2.
- En el dashboard proyectado, este botón solo responde a comandos del admin (no se puede clicar accidentalmente desde la tela del proyector).

### 7.3 Paleta Cromática del Dashboard

El dashboard usa una paleta completamente diferente al admin, diseñada para máximo contraste bajo luz solar directa:

| Token | HEX | Uso |
|-------|-----|-----|
| `--dash-bg` | `#0a1c0f` | Fondo general (verde noche profundo) |
| `--dash-trunk` | `#3D200A` | Tronco y ramas principales |
| `--dash-trunk-light` | `#5C3010` | Ramas secundarias, canasta |
| `--dash-leaf-green` | `#2B8500` | Hojas estudiantes |
| `--dash-leaf-vein` | `#1a5500` | Venas de las hojas |
| `--dash-leaf-text` | `#CCFF99` | Nombres en hojas verdes |
| `--dash-leaf-gold` | `#D4A017` | Hojas doradas (base) |
| `--dash-leaf-gold-hi` | `#F0C040` | Hojas doradas (shimmer) |
| `--dash-apple` | `#C41E1E` | Manzanas |
| `--dash-apple-hi` | `#E03030` | Highlight de manzanas |
| `--dash-apple-text` | `#FFFFFF` | Nombres en manzanas |
| `--dash-panel-bg` | `rgba(0,0,0,0.72)` | Paneles de estadísticas |
| `--dash-panel-border` | `#2B8500` | Borde de paneles |
| `--dash-stat-num` | `#FFFFFF` | Números en tabla de estadísticas |
| `--dash-verse` | `#C5E7EA` | Texto del versículo |
| `--dash-footer` | `#1a3a20` | Texto del pie de pantalla |
| `--dash-ground` | `#0d1a10` | Suelo / tierra |

### 7.4 Tipografía del Dashboard

- **Nombres en hojas:** Noto Sans Bold, 11-16px (se adapta al largo del nombre).
- **Nombres en manzanas:** Noto Sans Bold, 9-13px.
- **Números en tabla:** Noto Sans Bold, 30-40px (mínimo legible a 8 metros).
- **Texto en tabla:** Noto Sans Regular, 16-20px.
- **Versículo:** Noto Sans Regular Italic, 14-20px.
- **Título período / Contador días:** Noto Sans Regular, 12-14px.

### 7.5 La Celebración del Bautismo — Secuencia de Animación

Este es el evento más importante del sistema. Cuando el operador marca a alguien como bautizado, la secuencia GSAP se ejecuta automáticamente en el dashboard:

**Fase 1 — Pausa Dramática (0.0s - 0.5s)**
- Todo el dashboard reduce su brillo a `opacity: 0.4` excepto la hoja dorada de la persona.
- Un halo blanco aparece alrededor de esa hoja específica (SVG `<circle>` con `opacity` y `stroke-width` animados).

**Fase 2 — El Nombre Regresa (0.5s - 1.3s)**
- El nombre de la persona aparece sobre la hoja dorada, ahora en letras grandes doradas brillantes (`#F0C040`, 20px bold).
- El texto pulsa una vez: `scale(1.0) → scale(1.15) → scale(1.0)`.

**Fase 3 — La Hoja Se Desprende (1.3s - 3.0s)**
- La hoja dorada se anima siguiendo una curva de Bézier cúbica que la lleva de su posición en la rama hasta la canasta.
- Durante el vuelo, la hoja gira suavemente (±15°) y tiene una ligera oscilación lateral.
- Las otras hojas se agitan brevemente como si una brisa las moviera.

**Fase 4 — La Manzana Nace (3.0s - 4.0s)**
- Cuando la hoja llega a la canasta, desaparece y en su lugar nace la manzana: `scale(0) → scale(1.3) → scale(1.0)` con easing de spring.
- El nombre aparece en la manzana con `fade-in`.

**Fase 5 — La Celebración (3.5s - 7.0s)**
- Partículas de colores (dorado, verde, blanco) caen desde la parte superior del viewport.
- El contador de bautizados incrementa con animación de odómetro.
- Un texto de celebración aparece en la parte superior del dashboard: *"¡Bienvenido/a a la familia, [Nombre]!"* — fuente grande, color dorado, desaparece en 5 segundos.

**Fase 6 — Vuelta al Normal (7.0s - 8.0s)**
- El dashboard vuelve gradualmente a su brillo completo.
- La hoja (ahora vacía y dorada, sin nombre) permanece en el árbol.
- La manzana se integra al layout de la canasta.

### 7.6 Animación de Nacimiento de Hoja

Cuando se agrega una nueva persona (`estado = 'estudiando'`):
1. El sistema calcula el siguiente punto de spawning disponible usando filotaxis.
2. La hoja aparece en ese punto con `scale(0) opacity(0)`.
3. Crece hasta `scale(1.2)` con un ligero "overshoot" (spring easing).
4. Se asienta en `scale(1.0)`.
5. El nombre aparece con `fade-in` 0.3s después del final del crecimiento.
6. La hoja comienza inmediatamente su microanimación de balanceo.
- Duración total: ~1.2 segundos.

---

## 8. Dashboard — Escena 2: Analítica Profesional

La Escena 2 es una pantalla de analítica de alto nivel diseñada para ser proyectada también ante la congregación, pero con un enfoque en indicadores de salud misionera y progreso. Usa el lenguaje visual profesional del sistema de diseño "Pacífico Estructurado".

### 8.1 Composición de la Escena 2

```
┌────────────────────────────────────────────────────────────────┐
│  ← [Botón Escena 1]        [TÍTULO: Resumen Misionero]         │
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ INDICADOR    │  │ TASA DE      │  │ ACTIVOS ESTE │         │
│  │ DE IMPACTO   │  │ CONVERSIÓN   │  │ MES          │         │
│  │   [grande]   │  │   [%]        │  │   [Nº]       │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                │
│  ┌─────────────────────────────────┐  ┌──────────────────────┐│
│  │ LISTA ABC (tabla resumida)      │  │ SALUD MISIONERA      ││
│  │ A: [nombres/número]            │  │ [gráficos de barras]  ││
│  │ B: [nombres/número]            │  │ % iglesia activa      ││
│  │ C: [nombres/número]            │  │ Grupos más activos    ││
│  └─────────────────────────────────┘  └──────────────────────┘│
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ PROGRESO GENERAL DE ESTUDIOS BÍBLICOS                   │  │
│  │ [Barra de progreso lección a lección, todas las personas]│  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                │
│                              [BOTÓN → Escena 1]               │
└────────────────────────────────────────────────────────────────┘
```

### 8.2 Indicador de Impacto

Una tarjeta grande con un gráfico circular (donut chart) mostrando:
- **Centro:** El ratio `bautizados / total_estudiantes_del_período`.
- **Texto interno:** "X de Y dieron el paso".
- **Color del arco:** Gradiente de verde a dorado según el porcentaje.
- **Texto secundario:** "Tasa de éxito del período [nombre]".

### 8.3 Tabla ABC

Una tabla estilizada con las tres categorías:

| Categoría | Descripción | Personas | Indicador de Tiempo |
|-----------|-------------|----------|---------------------|
| **A** | Listos para decisión | [N] nombres | Tiempo promedio en A |
| **B** | En proceso de cultivo | [N] nombres | Tiempo promedio en B |
| **C** | Campo de amistad | [N] nombres | Tiempo promedio en C |

Las personas con **alertas de estancamiento** aparecen marcadas con un ícono de bandera `⚑` en color ámbar.

### 8.4 Métricas de Salud Congregacional

Tres visualizaciones:
1. **Barra de porcentaje:** "% de miembros activos dando estudios bíblicos".
2. **Ranking de grupos pequeños:** Top 3 grupos por cantidad de instructores activos (barras horizontales).
3. **Top instructores:** Las 3 personas que más estudios bíblicos tienen activos simultáneamente.

### 8.5 Progreso General de Estudios Bíblicos

Una visualización de tipo "swimming lanes" (carriles de natación):
- Cada persona que está estudiando tiene un carril horizontal.
- El carril muestra el progreso de lecciones (ej. lección 14 de 26) como una barra de progreso con segmentos individuales por lección.
- Las lecciones completadas son sólidas en verde, las pendientes son huecas.
- El nombre de la persona aparece a la izquierda del carril.
- Al final del carril se muestra el porcentaje de completitud.

### 8.6 Transición entre Escenas

- La transición Escena 1 → Escena 2 usa un efecto de `slide-left` con GSAP Timeline.
- La transición Escena 2 → Escena 1 usa `slide-right`.
- Duración: 0.6 segundos, easing `power2.inOut`.
- Durante la transición, el Socket.io mantiene la conexión activa (no hay recarga de página).

---

## 9. Panel de Administración

El panel de administración sigue el sistema de diseño "Pacífico Estructurado" definido en `DESIGN.md`.

### 9.1 Layout General

```
[Sidebar 260px fijo] | [Área de contenido principal — flex: 1]
```

**Sidebar:**
- Fondo: `#0F172A` (Azul Noche — Dark Mode BG).
- Logo "Árbol de Fe" en tipografía Plus Jakarta Sans 800.
- Íconos de navegación con labels: Personas · Feligresía · ABC · Literatura · Analítica · Snapshots · Config.
- Indicador en vivo del estado del dashboard (verde si activo, gris si no hay clientes conectados).
- PIN de rol activo (si está en modo bloqueado, muestra "Presentación bloqueada").

**Área de contenido:**
- Fondo: `#F8FAFC` (Arena Neutra — modo claro) o `#0F172A` (modo oscuro).
- Respeta los tokens de diseño del DESIGN.md al pie de la letra.

### 9.2 Módulo de Personas Activas

La vista principal del panel. Muestra todas las personas del período activo.

**Elementos:**
- **Barra de búsqueda** en tiempo real (filtra mientras se escribe, Fuzzy search).
- **Filtros rápidos:** Por estado (Estudiando / Decidido / Bautizado / Inactivo), Por clasificación ABC, Por instructor, Por grupo pequeño.
- **Tarjetas de persona** con:
  - Avatar con iniciales (color según estado).
  - Nombre completo.
  - Badge de estado (verde/dorado/azul/gris).
  - Badge de clasificación ABC.
  - Tiempo en el estado actual (ej. "12 días").
  - Indicador de alerta activa (bandera ámbar si existe).
  - Botones de acción contextual según estado:
    - Si `ESTUDIANDO`: [Decidió bautizarse] [Ver notas] [Marcar inactivo]
    - Si `DECIDIDO`: [Realizar bautismo 🎉] [Ver notas]
    - Si `BAUTIZADO`: [Ver manzana] [Ver historial]
  - Ícono de llama si `oracion_activa = true`.
- **Barra de historial** al pie: últimas 10 acciones con botón "Deshacer" (activo por 60s).
- **Botón "+ Nueva Persona"** prominente en la esquina superior derecha.

### 9.3 Formulario de Nueva Persona / Edición

Modal de pantalla completa (overlay, no página nueva). Se organiza en secciones colapsables:

**Sección 1 — Identificación (Obligatoria)**
```
Nombre *          [Input texto]
Edad              [Input número]
Sexo              [Radio: M / F / Otro]
```

**Sección 2 — Contacto**
```
Medio de contacto [Select: Teléfono / Correo / A través de un hermano]
  Si teléfono →   [Input tel]
  Si correo →     [Input email]
  Si hermano →    [Autocomplete de feligresía + nombre del hermano]
Ubicación de casa [Textarea — referencia informal, no GPS]
```

**Sección 3 — Estudio Bíblico**
```
Curso actual      [Select: Básico (26 lecciones) / Avanzado (10 lecciones)]
Lección actual    [Input número 1-26 o 1-10 según curso]
Días del estudio  [Checkbox múltiple: Lun Mar Mié Jue Vie Sáb Dom]
Instructor 1      [Autocomplete de feligresía — nombre + grupo pequeño]
Instructor 2      [Autocomplete de feligresía — opcional]
Num. Grupo Pequeño [Se autocompleta del instructor. Editable si es necesario]
```

**Sección 4 — Clasificación ABC**
```
Clasificación ABC [Radio: A / B / C / Sin clasificar]
Notas ABC         [Textarea]
```

**Sección 5 — Notas Privadas**
```
Notas             [Textarea — solo visibles en admin, nunca en dashboard]
Modo oración activa [Toggle]
```

### 9.4 Wizard de Bienvenida (Primera Ejecución)

Al iniciar por primera vez, un wizard de 5 pasos guía la configuración:
1. **Nombre de la congregación** y distrito.
2. **Nombre del período actual** y fecha de inicio.
3. **Versículos bíblicos** de apertura (pueden agregarse más tarde).
4. **Importación de feligresía** (CSV opcional — puede saltarse).
5. **Previsualización** del árbol vacío y confirmación.

### 9.5 Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `N` | Abrir formulario de nueva persona |
| `Ctrl+Z` | Deshacer última acción (si < 60s) |
| `C` | Activar modo celebración para persona seleccionada |
| `L` | Bloquear/Desbloquear dashboard |
| `B` | Ir a búsqueda |
| `Escape` | Cerrar modal activo |
| `←` / `→` | Navegar entre Escena 1 y Escena 2 del dashboard |

---

## 10. Sistema de Lista ABC

### 10.1 ¿Qué es la Lista ABC?

La Lista ABC es el sistema de clasificación misionera estándar de la Iglesia Adventista del Séptimo Día. Clasifica a los contactos misioneros según su receptividad espiritual:

- **A:** Alta receptividad. La persona está abierta al evangelio, muestra interés activo, y está cerca de tomar una decisión de fe.
- **B:** Receptividad media. La persona muestra interés moderado. Necesita más cultivo, amistades, y estudios.
- **C:** Receptividad inicial. La persona está en etapa de primer contacto. El trabajo es de servicio, amistad, y sembrar semillas.

### 10.2 Gestión Dinámica con Timeline

El sistema no solo almacena la clasificación actual, sino que mantiene un **historial completo de clasificaciones** (tabla `lista_abc`). Esto permite:

- Ver cuánto tiempo lleva una persona en cada categoría.
- Detectar si hay estancamiento (ej. 6 meses en C sin avanzar a B).
- Visualizar el progreso de la persona a través del tiempo como una línea de tiempo horizontal en el panel admin.

**Visualización del Timeline en Admin:**
```
[C] ──────────── [B] ──── [A]
  3 meses        2 meses  [actual]
  Ene-Mar 2025   Abr-May   Jun 2025
```

### 10.3 Sistema de Alertas por Estancamiento ABC

El motor de alertas (M11) corre como un cron job cada 24 horas y evalúa:

- **Umbral configurable** (default: 180 días en C sin avanzar a B).
- Si se supera el umbral, se crea una alerta `tipo = 'estancamiento_abc'` en la tabla `alertas`.
- La alerta aparece en el panel admin con un badge rojo y descripción: *"[Nombre] lleva 6 meses en la categoría C sin avanzar."*
- La alerta también envía una notificación Socket.io a todos los usuarios con rol Pastor, Anciano, o Director de Ministerios Personales.

### 10.4 Tabla ABC en Dashboard Escena 2

La tabla ABC proyectada en la Escena 2 muestra:
- Una fila por categoría (A, B, C).
- La cantidad de personas en cada categoría.
- Los nombres de las personas (pueden ocultarse con el "Modo Privacidad").
- Un indicador visual de cuántas tienen alertas de estancamiento.
- El tiempo promedio de permanencia en cada categoría para el período actual.

---

## 11. Registro Expandido de Contactos Misioneros

### 11.1 Progreso de Lecciones

El sistema distingue entre dos cursos de la Fe de Jesús:

| Curso | Lecciones | Descripción |
|-------|-----------|-------------|
| **Básico** | 26 | El curso estándar de la Fe de Jesús |
| **Avanzado (Post-bautismal)** | 10 | Para profundizar después del bautismo |

Reglas de negocio importantes:
- Una persona puede bautizarse sin haber completado las 26 lecciones del básico. El sistema registra hasta qué lección llegó.
- Si una persona se bautiza en la lección 18, el sistema registra `leccion_final = 18, completado = false` y crea un nuevo registro de estudio para el curso avanzado si así se indica.
- El sistema puede mostrar una advertencia visual en el admin cuando alguien se marca para bautismo con menos de 20 lecciones completadas (umbral configurable).

### 11.2 Sistema de Autocomplete para Instructores Bíblicos

Este es uno de los componentes técnicamente más críticos del formulario de alta velocidad:

**Algoritmo:**
1. Cuando el usuario escribe en el campo "Instructor Bíblico", se dispara un query contra `tabla: feligresia`.
2. El query usa una combinación de **búsqueda exacta por prefijo** (SQL `LIKE 'texto%'`) Y **búsqueda difusa** (implementada con el algoritmo de distancia Levenshtein en el servidor Node.js).
3. Los resultados se ordenan: primero los matches exactos por prefijo, luego los fuzzy matches ordenados por menor distancia.
4. El dropdown muestra hasta 8 resultados con: nombre completo + número de grupo pequeño + un ícono de check si ya es instructor activo de otra persona.
5. Al seleccionar, se autocompletan los campos "Nombre del Instructor" y "Num. Grupo Pequeño".

**Implementación:**
```typescript
// En src/members/memberSearchService.ts
export async function searchMembers(query: string): Promise<MemberSearchResult[]> {
  const normalizedQuery = normalizeText(query); // sin acentos, lowercase
  
  // Búsqueda por prefijo (SQLite LIKE es rápido con índice)
  const exactMatches = await db
    .selectFrom('feligresia')
    .where('nombre_busqueda', 'like', `${normalizedQuery}%`)
    .where('activo', '=', 1)
    .selectAll()
    .limit(5)
    .execute();
    
  // Búsqueda fuzzy para los restantes
  const allMembers = await db.selectFrom('feligresia').where('activo', '=', 1).selectAll().execute();
  const fuzzyMatches = allMembers
    .map(m => ({ ...m, distance: levenshtein(normalizedQuery, m.nombre_busqueda) }))
    .filter(m => m.distance <= 3)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5);
    
  return deduplicateAndRank([...exactMatches, ...fuzzyMatches]);
}
```

---

## 12. Módulo de Feligresía

### 12.1 Propósito

Mantener un registro actualizado de todos los miembros de la iglesia. Este módulo sirve principalmente como catálogo de referencia para el autocomplete de instructores bíblicos y para las métricas de salud congregacional.

### 12.2 Importación CSV

El admin tiene una pantalla de importación que acepta un archivo CSV con las siguientes columnas:

```csv
nombre,apellido_pat,apellido_mat,edad,sexo,num_grupo
Juan,García,López,35,M,3
María,Rodríguez,,28,F,7
```

**Flujo de importación:**
1. El usuario selecciona el archivo CSV.
2. El sistema parsea el archivo con `csv-parse` y muestra una **previsualización** de los datos antes de importar.
3. El usuario puede hacer correcciones inline en la previsualización.
4. Al confirmar, el sistema hace un `UPSERT` en la tabla `feligresia` basado en nombre + apellido (maneja duplicados).
5. Se muestra un reporte: "X registros importados, Y actualizados, Z duplicados ignorados".

### 12.3 CRUD Manual

Además del CSV, el admin permite agregar, editar y desactivar miembros individualmente. Los miembros desactivados (`activo = 0`) no aparecen en el autocomplete pero se conservan en la base de datos para la integridad histórica de los registros.

---

## 13. Sistema de Guardianes y Alertas

### 13.1 La Regla de los Guardianes

**Ningún contacto misionero puede estar en la base de datos sin un instructor bíblico asignado.**

Esta es una regla de negocio crítica. El sistema la implementa así:

1. Cuando se registra una nueva persona, el campo de instructor bíblico **no es obligatorio** en el formulario (la persona puede registrarse sin instructor aún), pero el sistema inmediatamente crea una alerta `tipo = 'sin_guardian'`.

2. Esta alerta se transmite por Socket.io a todos los usuarios con roles: `PASTOR`, `ANCIANO_MP`, `DIRECTOR_MP`, `DIRECTOR_OM`.

3. En el panel admin, las personas sin guardian aparecen con un badge especial y en la lista de alertas pendientes en el sidebar.

4. La alerta se resuelve automáticamente cuando se asigna un instructor bíblico a la persona.

5. Existe un umbral configurable: si la persona lleva más de N horas sin guardian (default: 48h), la alerta escala a `URGENTE` y cambia de color de ámbar a rojo.

### 13.2 Motor de Alertas (Cron Job)

Un proceso cron que corre cada noche a medianoche ejecuta las siguientes evaluaciones:

```typescript
// src/alerts/alertEngine.ts
export async function runNightlyAlertScan() {
  await scanForPersonsWithoutGuardian();    // sin instructor asignado
  await scanForStagnatedABCClassifications(); // en misma cat. ABC > umbral
  await scanForStagnatedLessons();          // sin avance en lecciones > umbral
  await scanForInactiveContacts();          // sin registro de actividad > umbral
  await notifyActivePinnedUsers();          // Push a usuarios conectados
}
```

### 13.3 Centro de Alertas en el Admin

Una sección dedicada del sidebar muestra todas las alertas activas ordenadas por prioridad (urgente → normal → informativa). Cada alerta tiene:
- Ícono de tipo.
- Descripción del problema.
- Nombre de la persona afectada (link al perfil).
- Tiempo transcurrido desde la alerta.
- Botón de "Resolver" que abre el perfil de la persona y el campo afectado.

---

## 14. Métricas de Salud de la Congregación

### 14.1 Panel de Analítica en Admin

Una sección del admin dedicada a métricas de salud congregacional, visible para roles de pastor y liderazgo:

#### Métrica 1 — Porcentaje de Iglesia Misioneramente Activa
```
Total de miembros activos: X
Miembros dando al menos 1 estudio bíblico: Y
Porcentaje: Y/X × 100 = Z%
```
Visualización: Gráfico de donut grande con el porcentaje en el centro.

#### Métrica 2 — Ranking de Grupos Pequeños por Actividad Misionera
```
Grupo 3: 8 instructores activos ████████████ (más activo)
Grupo 7: 5 instructores activos ████████
Grupo 1: 3 instructores activos █████
...
```
Visualización: Barras horizontales ordenadas por cantidad de instructores activos.

#### Métrica 3 — Instructores Más Activos
Top 5 miembros por cantidad de estudios bíblicos activos simultáneos.

#### Métrica 4 — Progreso Total de Estudios Bíblicos
Una visualización de barra compuesta que muestra:
- El total de lecciones en curso (suma de todas las personas × 26 lecciones del básico).
- Las lecciones ya completadas (suma de lecciones completadas de todas las personas).
- Un porcentaje global: "La congregación ha completado el X% del camino bíblico total".

#### Métrica 5 — Tendencia Histórica
Un gráfico de línea que muestra la evolución de bautismos, estudios activos, y clasificaciones ABC a lo largo del tiempo (usando los datos de todos los períodos históricos).

### 14.2 Integración con Dashboard Escena 2

Las métricas 1, 2 y 3 se proyectan en la Escena 2 del dashboard en formato visual simplificado (sin textos pequeños, con tipografía grande y colores de alto contraste).

---

## 15. Control de Literatura

### 15.1 Registro de Distribución

El módulo de literatura permite registrar cada pieza de material evangelístico distribuido por la congregación.

**Campos del registro:**
- Tipo de material (Select: Libro · Revista Señales · Tratado · Folleto · Biblia · Otro).
- Título específico.
- Cantidad.
- Fecha de distribución.
- Distribuido a (nombre o descripción del receptor — puede ser el nombre de un contacto misionero existente).
- Distribuidor (Autocomplete de feligresía).
- Ubicación / lugar de distribución.
- Notas adicionales.
- Período al que pertenece.

### 15.2 Vistas de Literatura

**Vista lista:** Tabla con filtros por período, tipo de material, y distribuidor.

**Vista resumen:** Tarjetas con totales: "X libros distribuidos este período", "Y revistas", etc.

**Vinculación con personas:** Si se distribuye literatura a alguien que ya está en la base de datos de contactos misioneros, se puede vincular el registro. Esto permite ver en el perfil de esa persona qué materiales ha recibido.

---

## 16. Actas de Victoria (Automatizadas)

### 16.1 ¿Qué es un Acta de Victoria?

Un documento formal y estilizado que compila los logros misioneros de un período de tiempo (semanal o mensual), listo para ser leído ante la congregación. Incluye bautismos, nuevos estudiantes, avances en clasificación ABC, y estadísticas destacadas.

### 16.2 Generación del Acta

El sistema genera el acta automáticamente con los datos reales de la base de datos. El flujo es:

1. El pastor o administrador va a `Admin → Analítica → Generar Acta de Victoria`.
2. Selecciona el rango de fechas (semana, mes, período completo, o rango personalizado).
3. El sistema compila los datos: personas bautizadas, nuevos contactos, avances ABC, literatura distribuida, grupos pequeños más activos.
4. Renderiza una vista previa del acta en pantalla usando la plantilla estilizada.
5. El pastor puede editar manualmente partes del texto antes de exportar.
6. Se exporta como imagen PNG (para proyectar) usando Puppeteer.

### 16.3 Plantilla del Acta

La plantilla sigue el sistema de diseño "Pacífico Estructurado":
- Encabezado con logo de la iglesia y nombre del período.
- Sección de bautismos (la más destacada, con nombres en tipografía grande).
- Sección de nuevos estudiantes.
- Sección de avances ABC (cuántas personas avanzaron de categoría).
- Sección de literatura distribuida (totales).
- Versículo de cierre (configurable).
- Firma del pastor y fecha.

---

## 17. Sistema de Snapshots y Períodos

### 17.1 El Concepto de Período

Todo el trabajo misionero pertenece a un **Período** activo. Solo puede haber un período activo a la vez. Los períodos tienen un nombre, fecha de inicio, y fecha de fin (al cerrarse).

### 17.2 Cierre de Período y Snapshot

Cuando el administrador decide cerrar un período:

1. Va a `Admin → Snapshots → Cerrar Período Actual`.
2. El sistema muestra un resumen del período: totales de personas, bautizos, estudios.
3. El administrador puede añadir un nombre descriptivo para el snapshot (ej. "Primer Semestre 2025 — 8 bautismos").
4. Al confirmar:
   a. Se serializa el estado completo del sistema en JSON (personas, estados, posiciones de hojas, estadísticas).
   b. El JSON se guarda en `periodos.snapshot_json`.
   c. El campo `activo` del período se pone en `0`.
   d. El dashboard se reinicia con la animación de otoño (hojas caen, canasta se vacía).
   e. Se crea automáticamente un nuevo período vacío.

### 17.3 Restauración de Snapshots Históricos

Desde `Admin → Snapshots → Historial`:
- Se lista todos los períodos cerrados como tarjetas con nombre, fechas, y estadísticas resumen.
- El botón "Ver" carga el snapshot en el dashboard en **modo solo lectura**.
- El modo solo lectura muestra el árbol exactamente como estaba al cierre del período, con las mismas posiciones de hojas y manzanas.
- El indicador en el sidebar muestra "Viendo período histórico: [nombre]" en color ámbar.
- Para volver al período activo, el usuario hace clic en "Volver al presente".

### 17.4 Comparación de Períodos (Analítica)

El módulo de analítica permite comparar métricas entre períodos:
- "En el primer semestre de 2025 hubo 8 bautismos. En el segundo semestre: 5."
- Gráficos de barras comparativos entre períodos históricos.

---

## 18. Sistema de Roles y Permisos

### 18.1 Roles del Sistema

El sistema no usa autenticación compleja con cuentas de usuario. Usa un sistema de **PINs por rol**. Cada rol tiene un PIN numérico de 4-6 dígitos. Un usuario selecciona su rol y digita el PIN para acceder a las funcionalidades de ese rol.

| Rol | PIN (configurable) | Permisos |
|-----|--------------------|----------|
| `OPERADOR` | Default: `0000` | Solo dashboard — no puede modificar datos. |
| `SECRETARIO` | Default: `1111` | Agregar personas, cambiar estados, registrar literatura. No puede hacer snapshots ni eliminar. |
| `LIDER_GP` | Default: `2222` | Ídem Secretario, pero solo para personas de su grupo pequeño. |
| `DIRECTOR_MP` | Default: `3333` | Todo lo de Secretario + gestión ABC + ver analítica + ver alertas. |
| `ANCIANO` | Default: `4444` | Todo lo de Director + realizar bautismos + ver feligresía completa. |
| `PASTOR` | Default: `5555` | Acceso completo — snapshots, configuración, todos los módulos. |
| `ADMIN_TECH` | Default: `9999` | Acceso total incluyendo configuración del sistema y datos sensibles. |

### 18.2 Implementación Técnica

- Los PINs se almacenan hasheados con bcrypt en la tabla `config`.
- El acceso al panel admin requiere digitar el PIN del rol deseado en una pantalla de selección.
- La sesión del rol se mantiene en `localStorage` del cliente hasta que el usuario cierra sesión o el timeout expire (60 minutos de inactividad).
- El rol activo se envía en cada request HTTP como cabecera `X-Role-Token` (un JWT firmado con el rol y timestamp de autenticación, sin información sensible).
- El middleware del servidor valida el JWT y aplica los permisos correspondientes.

### 18.3 Notificaciones Push por Rol

Cuando ocurre un evento relevante, el sistema envía notificaciones Socket.io solo a los roles que deben ser notificados:

| Evento | Roles Notificados |
|--------|------------------|
| Nueva persona sin guardian | DIRECTOR_MP, ANCIANO, PASTOR |
| Alerta de estancamiento ABC | DIRECTOR_MP, ANCIANO, PASTOR |
| Nuevo bautismo registrado | Todos los roles activos |
| Snapshot creado | PASTOR, ADMIN_TECH |
| Error crítico del sistema | ADMIN_TECH |

---

## 19. API REST — Especificación de Endpoints

Base URL: `http://localhost:3000/api/v1`

### Personas

| Método | Endpoint | Rol Mínimo | Descripción |
|--------|----------|-----------|-------------|
| `GET` | `/persons` | SECRETARIO | Lista todas las personas del período activo. Soporta filtros: `?estado=estudiando&abc=A`. |
| `GET` | `/persons/:id` | SECRETARIO | Detalle completo de una persona incluyendo historial de estados. |
| `POST` | `/persons` | SECRETARIO | Crear nueva persona. Body: `CreatePersonDTO`. |
| `PUT` | `/persons/:id` | SECRETARIO | Actualizar datos de una persona. |
| `POST` | `/persons/:id/status` | SECRETARIO | Cambiar estado. Body: `{ status: 'decidido' | 'bautizado' | 'inactivo' }`. |
| `POST` | `/persons/:id/undo` | SECRETARIO | Deshacer último cambio de estado (si < 60s). |
| `DELETE` | `/persons/:id` | PASTOR | Eliminar persona (solo acciones con log). |

### Feligresía

| Método | Endpoint | Rol Mínimo | Descripción |
|--------|----------|-----------|-------------|
| `GET` | `/members` | SECRETARIO | Lista todos los miembros activos. |
| `GET` | `/members/search?q=juan` | SECRETARIO | Búsqueda fuzzy para autocomplete. |
| `POST` | `/members` | ANCIANO | Crear miembro. |
| `PUT` | `/members/:id` | ANCIANO | Actualizar miembro. |
| `POST` | `/members/import-csv` | PASTOR | Importar CSV. Body: multipart/form-data. |

### Lista ABC

| Método | Endpoint | Rol Mínimo | Descripción |
|--------|----------|-----------|-------------|
| `GET` | `/abc` | DIRECTOR_MP | Lista todos los contactos clasificados con su categoría actual. |
| `PUT` | `/abc/:personId` | DIRECTOR_MP | Cambiar clasificación ABC de una persona. Body: `{ clasificacion: 'A' | 'B' | 'C', notas: string }`. |
| `GET` | `/abc/:personId/history` | DIRECTOR_MP | Timeline histórico de clasificaciones de una persona. |

### Estudios Bíblicos

| Método | Endpoint | Rol Mínimo | Descripción |
|--------|----------|-----------|-------------|
| `GET` | `/bible-studies` | SECRETARIO | Lista todos los estudios activos. |
| `GET` | `/bible-studies/:personId` | SECRETARIO | Estudio de una persona específica. |
| `PUT` | `/bible-studies/:id/lesson` | SECRETARIO | Actualizar lección actual. Body: `{ leccion: number }`. |
| `POST` | `/bible-studies/:id/complete` | SECRETARIO | Marcar lección como completada. |

### Snapshots y Períodos

| Método | Endpoint | Rol Mínimo | Descripción |
|--------|----------|-----------|-------------|
| `GET` | `/periods` | SECRETARIO | Lista todos los períodos. |
| `GET` | `/periods/active` | SECRETARIO | Período activo actual. |
| `POST` | `/periods/close` | PASTOR | Cerrar período actual y crear snapshot. |
| `GET` | `/periods/:id/snapshot` | PASTOR | Cargar snapshot histórico (solo lectura). |

### Analytics

| Método | Endpoint | Rol Mínimo | Descripción |
|--------|----------|-----------|-------------|
| `GET` | `/analytics/dashboard` | SECRETARIO | Datos para la Escena 2 del dashboard (tabla ABC, métricas, progreso). |
| `GET` | `/analytics/health` | DIRECTOR_MP | Métricas de salud congregacional. |
| `GET` | `/analytics/impact` | DIRECTOR_MP | Indicador de impacto (ratio conversión). |

### Alertas

| Método | Endpoint | Rol Mínimo | Descripción |
|--------|----------|-----------|-------------|
| `GET` | `/alerts` | DIRECTOR_MP | Lista de alertas activas. |
| `POST` | `/alerts/:id/resolve` | DIRECTOR_MP | Resolver una alerta. |

### Configuración

| Método | Endpoint | Rol Mínimo | Descripción |
|--------|----------|-----------|-------------|
| `GET` | `/config` | SECRETARIO | Configuración del sistema. |
| `PUT` | `/config` | PASTOR | Actualizar configuración. |
| `GET` | `/config/verses` | OPERADOR | Lista de versículos activos. |
| `POST` | `/config/verses` | PASTOR | Agregar versículo. |

---

## 20. Sistema de Tiempo Real (WebSocket)

### 20.1 Eventos Emitidos por el Servidor

| Evento | Payload | Descripción |
|--------|---------|-------------|
| `person:added` | `Person` | Nueva persona agregada al sistema. |
| `person:status_changed` | `{ id, prevStatus, newStatus, person }` | Cambio de estado de una persona. |
| `person:baptism_celebration` | `Person` | Trigger de la animación de celebración. |
| `person:updated` | `Person` | Datos de una persona actualizados. |
| `person:deleted` | `{ id }` | Persona eliminada. |
| `abc:classification_changed` | `{ personId, prevClass, newClass }` | Cambio de clasificación ABC. |
| `alert:new` | `Alert` | Nueva alerta generada. |
| `alert:resolved` | `{ id }` | Alerta resuelta. |
| `period:closed` | `Period` | Período cerrado — trigger de animación de otoño. |
| `period:new` | `Period` | Nuevo período iniciado. |
| `dashboard:scene_change` | `{ scene: 1 | 2 }` | Cambio de escena ordenado desde admin. |
| `dashboard:lock` | `{ locked: boolean }` | Bloqueo/desbloqueo del dashboard. |
| `config:updated` | `Partial<Config>` | Configuración actualizada. |
| `verse:cycle` | `Verse` | Nuevo versículo a mostrar (emitido por cron). |

### 20.2 Rooms de Socket.io

```
room: 'dashboard'     → Todos los dashboards conectados (Escena 1 y 2)
room: 'admin'         → Todos los paneles admin conectados
room: 'admin:pastor'  → Solo usuarios con rol PASTOR o superior
room: 'admin:director_mp' → Solo usuarios DIRECTOR_MP, ANCIANO, PASTOR
```

### 20.3 Auto-Guardado

Cada 30 segundos, el servidor crea un "checkpoint" automático: serializa el estado actual del sistema en memoria y lo guarda en `config` con la clave `last_autosave`. Si el sistema se apaga inesperadamente, al reiniciar carga este checkpoint.

---

## 21. Algoritmos Clave de Visualización

### 21.1 Filotaxis Áurea — Distribución de Hojas

La distribución de hojas en el árbol imita el patrón natural de crecimiento de plantas usando el **Ángulo Áureo (≈ 137.508°)**, derivado de la proporción áurea (φ ≈ 1.618).

**Fórmula:**
```javascript
// src/client/shared/tree-engine/phyllotaxis.ts

const GOLDEN_ANGLE = 137.508; // grados

export function calculateLeafPosition(leafIndex: number, config: LeafConfig): LeafPosition {
  const angle = leafIndex * GOLDEN_ANGLE * (Math.PI / 180); // convertir a radianes
  const radius = config.baseScale * Math.sqrt(leafIndex);
  
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  
  // Mapear a los puntos de spawning del árbol SVG
  return mapToNearestBranchPoint(x, y, config.branchPoints);
}
```

**Los 33 Puntos de Spawning:**
Son coordenadas pre-calculadas en el SVG del árbol que corresponden a los extremos de todas las ramas. El algoritmo de filotaxis genera posiciones ideales, y luego se mapean al punto de spawning más cercano que no esté ocupado. Los primeros puntos de la espiral (índices 1-5) corresponden a las posiciones más visibles y centrales del árbol; los subsiguientes llenan el árbol de forma natural hacia los bordes.

### 21.2 Circle Packing Triangular — Manzanas en la Canasta

Las manzanas se distribuyen en la canasta usando **Hexagonal Packing** (la forma más eficiente de empaquetar círculos en un área rectangular), que es la misma geometría que usan los panales de abeja.

```javascript
// src/client/shared/basket-engine/circlePacking.ts

export function calculateApplePositions(
  appleCount: number,
  basketRect: DOMRect,
  appleRadius: number
): ApplePosition[] {
  const positions: ApplePosition[] = [];
  const diameter = appleRadius * 2;
  const colSpacing = diameter * 1.05; // 5% de separación
  const rowSpacing = diameter * 0.9;  // Filas más apretadas (hexagonal)
  
  let col = 0, row = 0;
  
  for (let i = 0; i < appleCount; i++) {
    const offsetX = (row % 2 === 0) ? 0 : appleRadius * 0.55; // Offset alternado
    const x = basketRect.left + appleRadius + (col * colSpacing) + offsetX;
    const y = basketRect.bottom - appleRadius - (row * rowSpacing);
    
    positions.push({ x, y, index: i });
    
    col++;
    const maxCols = Math.floor((basketRect.width - appleRadius) / colSpacing);
    if (col >= maxCols) { col = 0; row++; }
  }
  
  return positions;
}
```

Cuando se agrega una manzana nueva, el algoritmo **recalcula todas las posiciones** y las manzanas existentes se reposicionan con una animación de `tween` GSAP suave de 0.5 segundos.

---

## 22. Sistema de Diseño UI/UX

### 22.1 Fuente de Verdad: DESIGN.md

El panel de administración implementa el sistema de diseño **"Pacífico Estructurado"** definido en `DESIGN.md` al pie de la letra. Todos los tokens de diseño están implementados como CSS Custom Properties.

### 22.2 Tokens de Diseño — Panel Admin

```css
/* admin/shared/design-tokens.css */
:root {
  /* Superficies - Modo Claro */
  --bg-main: #F8FAFC;
  --bg-surface: #FFFFFF;
  --border: #E2E8F0;
  --border-input: #CBD5E1;
  
  /* Textos */
  --text-main: #1E293B;
  --text-muted: #64748B;
  --text-inverse: #FFFFFF;
  
  /* Marca */
  --brand-primary: #0F4C81;
  --brand-light: #3B82F6;
  --accent: #F59E0B;
  
  /* Semántica */
  --success: #10B981;     --success-bg: rgba(16, 185, 129, 0.1);
  --warning: #F59E0B;     --warning-bg: rgba(245, 158, 11, 0.1);
  --danger: #EF4444;      --danger-bg: rgba(239, 68, 68, 0.1);
  
  /* Tipografía */
  --font-display: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  
  /* Elevación */
  --shadow-1: 0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03);
  --shadow-2: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-3: 0 10px 15px rgba(0,0,0,0.1);
  --shadow-4: 0 20px 25px rgba(0,0,0,0.15);
  
  /* Radios */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
}

/* Modo Oscuro */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-main: #0F172A;
    --bg-surface: #1E293B;
    --border: rgba(255, 255, 255, 0.1);
    --border-input: rgba(255, 255, 255, 0.2);
    --text-main: #F8FAFC;
    --text-muted: #94A3B8;
    --success: #34D399;
    --warning: #FBBF24;
    --danger: #F87171;
  }
}
```

### 22.3 Componentes Clave del Admin

**Botón Primario:**
```css
.btn-primary {
  background: var(--brand-primary);
  color: var(--text-inverse);
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  box-shadow: var(--shadow-2);
  transition: transform 0.2s, box-shadow 0.2s;
  border: none;
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 12px rgba(15, 76, 129, 0.25);
}
```

**Tarjeta de Persona:**
```css
.person-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  box-shadow: var(--shadow-1);
  transition: border-color 0.2s, box-shadow 0.2s;
}
.person-card:hover {
  border-color: var(--brand-light);
  box-shadow: var(--shadow-2);
}
```

**Badge de Estado:**
```css
/* Cada badge tiene color semántico */
.badge { padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 600; }
.badge-estudiando  { background: rgba(43, 133, 0, 0.1); color: #2B8500; }
.badge-decidido    { background: rgba(212, 160, 23, 0.1); color: #8B6914; }
.badge-bautizado   { background: rgba(0, 118, 128, 0.1); color: #007680; }
.badge-inactivo    { background: var(--bg-main); color: var(--text-muted); }
.badge-A           { background: rgba(16, 185, 129, 0.1); color: var(--success); }
.badge-B           { background: rgba(245, 158, 11, 0.1); color: var(--warning); }
.badge-C           { background: rgba(100, 116, 139, 0.1); color: var(--text-muted); }
```

---

## 23. DevOps, Infraestructura y Despliegue

### 23.1 Estructura de `docker-compose.yml`

```yaml
version: '3.9'

services:
  arbol-app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: arbol-app
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - PORT=3000
      - DB_PATH=/data/arbol.db
      - BACKUP_PATH=/data/backups/
    volumes:
      - db-data:/data
    networks:
      - arbol-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  arbol-nginx:
    image: nginx:alpine
    container_name: arbol-nginx
    restart: unless-stopped
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - arbol-app
    networks:
      - arbol-network

  backup-cron:
    image: node:20-alpine
    container_name: arbol-backup
    restart: unless-stopped
    volumes:
      - db-data:/data
      - ./scripts:/scripts
    command: node /scripts/backup.js
    depends_on:
      - arbol-app
    networks:
      - arbol-network

  portainer:
    image: portainer/portainer-ce:latest
    container_name: portainer
    restart: unless-stopped
    ports:
      - "9000:9000"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer-data:/data
    networks:
      - arbol-network

volumes:
  db-data:
  portainer-data:

networks:
  arbol-network:
    driver: bridge
```

### 23.2 `Dockerfile`

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build  # esbuild compila TypeScript

FROM node:20-alpine AS runtime
WORKDIR /app
RUN apk add --no-cache curl  # para healthcheck
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/client ./client
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

### 23.3 Script de Respaldo Automático

```javascript
// scripts/backup.js
const cron = require('node-cron');
const fs = require('fs');
const path = require('path');

// Corre cada 6 horas
cron.schedule('0 */6 * * *', () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const src = '/data/arbol.db';
  const dest = `/data/backups/arbol-${timestamp}.db`;
  
  fs.copyFileSync(src, dest);
  
  // Mantener solo los últimos 30 backups
  const backups = fs.readdirSync('/data/backups/')
    .sort()
    .slice(0, -30);
  backups.forEach(f => fs.unlinkSync(path.join('/data/backups/', f)));
  
  console.log(`[Backup] Guardado: ${dest}`);
});
```

### 23.4 `nginx.conf`

```nginx
events {}

http {
  upstream arbol_app {
    server arbol-app:3000;
  }

  server {
    listen 80;
    
    # Ruta del dashboard
    location /dashboard {
      proxy_pass http://arbol_app;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
    }
    
    # Ruta del admin
    location /admin {
      proxy_pass http://arbol_app;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
    }
    
    # API y WebSocket
    location /api {
      proxy_pass http://arbol_app;
    }
    
    location /socket.io/ {
      proxy_pass http://arbol_app;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
    }
  }
}
```

### 23.5 Requisitos de Hardware Recomendados

| Componente | Mínimo | Recomendado |
|-----------|--------|-------------|
| CPU | 2 núcleos 1.4GHz | 4 núcleos 2.0GHz+ |
| RAM | 2 GB | 4 GB |
| Almacenamiento | 16 GB SSD | 32 GB SSD |
| Red | Wi-Fi 2.4GHz | Wi-Fi 5GHz o Ethernet |
| SO | Ubuntu 22.04 LTS | Ubuntu 22.04 LTS |

**Hardware sugerido para instalación fija:** Intel NUC, Raspberry Pi 5 (4GB), o cualquier mini-PC similar. El sistema es extremadamente ligero y funciona perfectamente en hardware modesto.

---

## 24. Roadmap de Desarrollo por Fases

### Fase 0 — Preparación (1-2 semanas)

- [ ] Configurar el repositorio Git con la estructura de directorios completa.
- [ ] Configurar TypeScript, ESLint, Prettier, Husky, Vitest.
- [ ] Crear las migraciones iniciales de SQLite.
- [ ] Implementar el servidor Express básico con Socket.io.
- [ ] Crear el árbol SVG base (sin hojas) como componente SVG estático.
- [ ] Configurar el pipeline de build con esbuild.
- [ ] Crear el `Dockerfile` y `docker-compose.yml` funcionales.

### Fase 1 — Núcleo Funcional MVP (3-4 semanas)

**Backend:**
- [ ] M03 (Personas): CRUD completo con validación Zod.
- [ ] M07 (Persistencia): Repositorios SQLite con Kysely.
- [ ] M09 (Sincronización): Broadcast de eventos via Socket.io.
- [ ] M12 (Log de Eventos): Registro de todas las acciones.
- [ ] M13 (Configuración): Config básica con versículos y período.

**Frontend Dashboard (Escena 1):**
- [ ] F01: Árbol SVG base integrado.
- [ ] F10: Algoritmo de filotaxis — posicionamiento de hojas.
- [ ] Hojas verdes con nombres y microanimación de balanceo.
- [ ] Hojas doradas con shimmer.
- [ ] Canasta SVG y manzanas con circle packing.
- [ ] Tabla de estadísticas esquina superior derecha.
- [ ] Recepción de eventos Socket.io y actualización del árbol.

**Frontend Admin:**
- [ ] F03: Lista de personas + cambio de estado simple.
- [ ] Formulario básico de nueva persona (solo campos obligatorios).
- [ ] Wizard de bienvenida (primera ejecución).

### Fase 2 — Visualización Completa y Animaciones (2-3 semanas)

- [ ] Animaciones GSAP: nacimiento de hoja, transición verde→dorada.
- [ ] Secuencia completa de Celebración de Bautismo (Fase 1-6).
- [ ] Versículo rotativo.
- [ ] Contador de días del período.
- [ ] Código QR (generación dinámica).
- [ ] Botón de cambio de escena (Escena 1 ↔ Escena 2).
- [ ] Escena 2 del dashboard: estructura base con Chart.js.
- [ ] Modo de bloqueo del dashboard.
- [ ] Atajos de teclado en el admin.

### Fase 3 — Sistema de Datos Completo (3-4 semanas)

- [ ] M04 (Feligresía): CRUD + importación CSV.
- [ ] F04 (Admin Miembros): Lista, importación, autocomplete.
- [ ] M05 (Lista ABC): Clasificación + timeline + historial.
- [ ] F05 (Admin ABC): Vista de clasificaciones con timeline visual.
- [ ] M06 (Estudios Bíblicos): Progreso de lecciones, instructores.
- [ ] Sistema de autocomplete fuzzy para instructores.
- [ ] M07 (Literatura): CRUD de literatura distribuida.
- [ ] M11 (Alertas): Motor de alertas + cron job nocturno.
- [ ] M13 (Guardianes): Alerta sin instructor asignado.
- [ ] Sistema de roles y PINs.
- [ ] M08 (Snapshots): Cierre de período + restauración histórica.

### Fase 4 — Analítica y Features Avanzadas (2-3 semanas)

- [ ] M10 (Analítica): Todas las métricas de salud congregacional.
- [ ] F07 (Admin Analytics): Gráficos y dashboards de salud.
- [ ] Escena 2 completa: Indicador de impacto, tabla ABC, métricas.
- [ ] M14 (Exportación): Actas de Victoria con Puppeteer.
- [ ] Generación de imagen PNG del árbol para compartir.
- [ ] Comparación entre períodos históricos.
- [ ] Animación de otoño al cerrar período.
- [ ] Animación de primavera al iniciar período.
- [ ] Modo de demo con datos ficticios.
- [ ] Modo "Spotlight" de hoja (resaltar una persona desde el admin).
- [ ] Modo "Nombres ocultos" para privacidad.
- [ ] Mensaje del pastor proyectable (texto temporal en dashboard).

### Fase 5 — Empaquetado y Pulido (2 semanas)

- [ ] Electron wrapper completo con apertura automática de dos ventanas.
- [ ] electron-builder para generar instaladores .exe y .dmg.
- [ ] Instalador con icono personalizado.
- [ ] Auto-guardado cada 30 segundos.
- [ ] Recuperación de checkpoint al reiniciar.
- [ ] Modo de acceso desde red Wi-Fi (instrucciones de configuración).
- [ ] Portainer configurado con stack predefinido.
- [ ] Testing completo con Vitest.
- [ ] Documentación de usuario final (guía no-técnica).

---

## 25. Estructura de Archivos del Proyecto

```
arbol-de-fe/
│
├── README.md                    ← Este documento
├── package.json
├── tsconfig.json
├── .eslintrc.js
├── .prettierrc
├── docker-compose.yml
├── Dockerfile
├── nginx.conf
│
├── scripts/                     ← Scripts de utilidad
│   ├── backup.js
│   ├── migrate.ts               ← Ejecuta migraciones de DB
│   └── seed.ts                  ← Datos de ejemplo para desarrollo
│
├── migrations/                  ← Migraciones SQLite en orden
│   ├── 001_create_periodos.sql
│   ├── 002_create_feligresia.sql
│   ├── 003_create_personas.sql
│   ├── 004_create_estudios.sql
│   ├── 005_create_lista_abc.sql
│   ├── 006_create_alertas.sql
│   ├── 007_create_literatura.sql
│   ├── 008_create_log_eventos.sql
│   ├── 009_create_config.sql
│   └── 010_create_versiculos.sql
│
├── src/                         ← Backend TypeScript
│   ├── server/
│   │   ├── app.ts               ← Configuración Express + middleware
│   │   ├── socket.ts            ← Configuración Socket.io
│   │   └── index.ts             ← Entry point del servidor
│   │
│   ├── shared/
│   │   ├── types/               ← Interfaces TypeScript compartidas
│   │   ├── errors/              ← Clases de error personalizadas
│   │   └── utils/               ← Utilidades (normalizeText, levenshtein, etc.)
│   │
│   ├── db/
│   │   ├── connection.ts        ← Inicialización better-sqlite3 + Kysely
│   │   ├── types.ts             ← Tipos de Kysely para todas las tablas
│   │   └── migrator.ts          ← Runner de migraciones
│   │
│   ├── auth/
│   │   ├── authMiddleware.ts
│   │   ├── pinService.ts
│   │   └── roles.ts
│   │
│   ├── persons/
│   │   ├── person.types.ts
│   │   ├── person.repository.ts
│   │   ├── person.service.ts    ← Lógica de negocio
│   │   ├── person.commands.ts   ← Command Pattern
│   │   └── person.router.ts     ← Endpoints Express
│   │
│   ├── members/
│   │   ├── member.types.ts
│   │   ├── member.repository.ts
│   │   ├── member.service.ts
│   │   ├── member.search.ts     ← Algoritmo de búsqueda fuzzy
│   │   └── member.router.ts
│   │
│   ├── abc-list/
│   │   ├── abc.types.ts
│   │   ├── abc.repository.ts
│   │   ├── abc.service.ts
│   │   └── abc.router.ts
│   │
│   ├── bible-studies/
│   │   ├── study.types.ts
│   │   ├── study.repository.ts
│   │   ├── study.service.ts
│   │   └── study.router.ts
│   │
│   ├── literature/
│   │   ├── literature.types.ts
│   │   ├── literature.repository.ts
│   │   ├── literature.service.ts
│   │   └── literature.router.ts
│   │
│   ├── snapshots/
│   │   ├── snapshot.types.ts
│   │   ├── snapshot.service.ts  ← Serialización y restauración
│   │   └── snapshot.router.ts
│   │
│   ├── realtime/
│   │   ├── events.ts            ← Catálogo de nombres de eventos
│   │   └── broadcaster.ts       ← Servicio de emisión Socket.io
│   │
│   ├── analytics/
│   │   ├── analytics.service.ts ← Cálculo de todas las métricas
│   │   └── analytics.router.ts
│   │
│   ├── alerts/
│   │   ├── alert.types.ts
│   │   ├── alert.repository.ts
│   │   ├── alertEngine.ts       ← Motor de alertas (cron)
│   │   └── alert.router.ts
│   │
│   ├── audit/
│   │   └── auditService.ts      ← Log de eventos
│   │
│   ├── config/
│   │   ├── config.service.ts
│   │   └── config.router.ts
│   │
│   └── export/
│       ├── victoryAct.template.ts
│       └── export.service.ts    ← Puppeteer PNG/HTML
│
├── client/                      ← Frontend (HTML + JS + CSS)
│   │
│   ├── shared/
│   │   ├── design-tokens.css    ← Variables CSS completas
│   │   ├── components/          ← Componentes HTML reutilizables
│   │   ├── tree-engine/
│   │   │   ├── phyllotaxis.js   ← Algoritmo filotaxis áurea
│   │   │   ├── branchPoints.js  ← Los 33 puntos de spawning
│   │   │   ├── leafAnimations.js ← GSAP: nacer, transformar, caer
│   │   │   └── treeRenderer.js  ← Renderizado del árbol SVG
│   │   └── basket-engine/
│   │       ├── circlePacking.js ← Hexagonal packing
│   │       └── appleRenderer.js ← Renderizado de manzanas
│   │
│   ├── dashboard/
│   │   ├── index.html           ← Entry point del dashboard
│   │   ├── dashboard.css        ← Estilos para proyector (high contrast)
│   │   ├── dashboard.js         ← Controlador principal del dashboard
│   │   │
│   │   ├── scene1/
│   │   │   ├── scene1.js        ← Lógica de la Escena 1
│   │   │   ├── tree.svg         ← El árbol SVG base (sin hojas)
│   │   │   ├── stats-panel.js   ← Tabla de estadísticas
│   │   │   ├── verse-ticker.js  ← Versículo rotativo
│   │   │   ├── qr-display.js   ← Generación y display del QR
│   │   │   └── celebration.js   ← Secuencia GSAP de bautismo
│   │   │
│   │   └── scene2/
│   │       ├── scene2.js        ← Lógica de la Escena 2
│   │       ├── impact-meter.js  ← Indicador de impacto (Chart.js)
│   │       ├── abc-table.js     ← Tabla ABC proyectable
│   │       ├── health-charts.js ← Métricas de salud (Chart.js)
│   │       └── progress-lanes.js ← Carriles de progreso de estudios
│   │
│   └── admin/
│       ├── index.html           ← Entry point del admin
│       ├── admin.css            ← Estilos del panel admin
│       ├── admin.js             ← Controlador Alpine.js principal
│       │
│       ├── persons/
│       │   ├── persons-list.html
│       │   ├── persons-list.js  ← Alpine.js: lista, búsqueda, filtros
│       │   ├── person-form.js   ← Alpine.js: formulario expandido
│       │   └── person-card.html ← Tarjeta de persona (componente)
│       │
│       ├── members/
│       │   ├── members-list.html
│       │   ├── members-list.js
│       │   └── csv-importer.js
│       │
│       ├── abc/
│       │   ├── abc-manager.html
│       │   └── abc-manager.js   ← Alpine.js: clasificación + timeline
│       │
│       ├── literature/
│       │   ├── literature-list.html
│       │   └── literature-list.js
│       │
│       ├── analytics/
│       │   ├── analytics.html
│       │   └── analytics.js     ← Chart.js: métricas de salud
│       │
│       ├── snapshots/
│       │   ├── snapshots.html
│       │   └── snapshots.js
│       │
│       ├── config/
│       │   ├── config.html
│       │   └── config.js
│       │
│       └── onboarding/
│           ├── wizard.html
│           └── wizard.js        ← Alpine.js: wizard de bienvenida
│
├── electron/                    ← Código Electron (desktop app)
│   ├── main.js                  ← Proceso principal de Electron
│   ├── preload.js
│   └── electron-builder.yml     ← Configuración de build
│
└── tests/                       ← Tests con Vitest
    ├── unit/
    │   ├── phyllotaxis.test.ts
    │   ├── circlePacking.test.ts
    │   ├── person.service.test.ts
    │   └── alertEngine.test.ts
    └── integration/
        ├── persons.api.test.ts
        └── snapshots.test.ts
```

---

## 26. Guía de Contribución y Convenciones

### 26.1 Convenciones de Nomenclatura

**Archivos:**
- Backend: `kebab-case.ts` (ej. `person.service.ts`, `alertEngine.ts`).
- Frontend: `camelCase.js` (ej. `leafAnimations.js`, `circePacking.js`).
- CSS: `kebab-case.css` (ej. `design-tokens.css`).
- Componentes HTML: `kebab-case.html` (ej. `person-card.html`).

**Código TypeScript:**
- Interfaces: `PascalCase` con prefijo `I` solo para interfaces de repositorio (`IPersonRepository`).
- Types: `PascalCase` (ej. `PersonStatus`, `CreatePersonDTO`).
- Funciones: `camelCase` (ej. `calculateLeafPosition`).
- Constantes: `UPPER_SNAKE_CASE` (ej. `GOLDEN_ANGLE`).
- Clases: `PascalCase` (ej. `AddPersonCommand`).

**Eventos Socket.io:** `entidad:accion` en minúsculas con guión bajo para espacios (ej. `person:status_changed`, `alert:new`).

**Endpoints API:** Sustantivos en plural, kebab-case (ej. `/api/v1/bible-studies`, `/api/v1/abc-list`).

### 26.2 Convenciones de Commits

El proyecto usa **Conventional Commits**:

```
feat(persons): agregar autocomplete fuzzy para instructores bíblicos
fix(tree): corregir posición de hoja en rama izquierda inferior
docs(readme): actualizar esquema de base de datos
style(admin): aplicar tokens de diseño en formulario de nueva persona
refactor(alerts): extraer motor de alertas a módulo independiente
test(phyllotaxis): agregar casos de prueba para índices altos
chore(docker): actualizar imagen nginx a alpine 3.19
```

### 26.3 Flujo de Git

```
main                    ← Producción estable
  └── develop           ← Integración de features
        ├── feat/tree-engine
        ├── feat/admin-persons
        ├── fix/celebration-animation
        └── feat/abc-timeline
```

Pull Requests siempre van hacia `develop`. Nunca directamente a `main`.

### 26.4 Variables de Entorno

Crear `.env` en la raíz (nunca commitear):

```env
# Server
NODE_ENV=development
PORT=3000

# Base de datos
DB_PATH=./data/arbol.db
BACKUP_PATH=./data/backups/

# Configuración inicial
DEFAULT_CONGREGATION=Mi Iglesia
DEFAULT_DISTRICT=Mi Distrito

# Alertas
ALERT_NO_GUARDIAN_HOURS=48
ALERT_ABC_STAGNATION_DAYS=180
ALERT_LESSON_STAGNATION_DAYS=30

# Electron (solo para build desktop)
ELECTRON_ADMIN_WINDOW_TITLE=Árbol de Fe — Panel de Administración
ELECTRON_DASHBOARD_WINDOW_TITLE=Árbol de Fe — Dashboard
```

### 26.5 Comandos del Proyecto

```bash
# Instalar dependencias
npm install

# Desarrollo (servidor + hot reload)
npm run dev

# Correr migraciones
npm run migrate

# Poblar con datos de demo
npm run seed

# Build de producción
npm run build

# Tests
npm run test
npm run test:watch

# Electron (desarrollo)
npm run electron:dev

# Electron (build instalador)
npm run electron:build

# Docker (desarrollo local)
docker-compose up -d

# Docker (ver logs)
docker-compose logs -f arbol-app
```

---

## Apéndice A — Glosario de Términos

| Término | Definición |
|---------|-----------|
| **Fe de Jesús** | Programa de estudios bíblicos de la IASD. Cuenta con un curso básico (26 lecciones) y un curso avanzado post-bautismal (10 lecciones). |
| **Contacto Misionero** | Persona externa a la iglesia que ha aceptado estudiar la Fe de Jesús o que está en proceso de acercamiento al evangelio. |
| **Instructor Bíblico** | Miembro de la iglesia que guía los estudios bíblicos de uno o más contactos misioneros. |
| **Grupo Pequeño** | Célula de discipulado dentro de la iglesia. Cada miembro pertenece a un Grupo Pequeño numerado. |
| **Lista ABC** | Sistema de clasificación misionera estándar de la IASD que categoriza los contactos según su receptividad espiritual. |
| **Ministerios Personales** | Departamento de la iglesia encargado de coordinar el trabajo misionero. |
| **Director de Obra Misionera** | Líder específico del programa de evangelización y estudios bíblicos. |
| **Anciano de MP** | Anciano de la iglesia asignado a supervisar el departamento de Ministerios Personales. |
| **10 Minutos Misioneros** | Segmento del culto de la iglesia dedicado a reportar y celebrar el avance misionero de la semana. |
| **Período** | Ciclo de trabajo misionero (típicamente semestral o anual) que tiene inicio y fin. Al cerrar, se guarda un snapshot. |
| **Snapshot** | Serialización completa del estado del sistema en un momento dado. Equivale a una "fotografía" del árbol en ese instante. |
| **Guardian** | En el contexto del sistema: el instructor bíblico asignado como responsable de un contacto misionero. |
| **Filotaxis** | Patrón matemático de crecimiento de hojas en la naturaleza, basado en el ángulo áureo. El sistema lo usa para distribuir las hojas en el árbol. |
| **Circle Packing** | Algoritmo que distribuye círculos en un área de forma eficiente. Se usa para distribuir las manzanas en la canasta. |

---

## Apéndice B — Referencias y Recursos

- **GSAP (GreenSock):** https://gsap.com/docs/v3/
- **Alpine.js v3:** https://alpinejs.dev/
- **Kysely (query builder):** https://kysely.dev/
- **better-sqlite3:** https://github.com/WiseLibs/better-sqlite3
- **Socket.io v4:** https://socket.io/docs/v4/
- **Electron v29:** https://www.electronjs.org/docs/latest/
- **Chart.js v4:** https://www.chartjs.org/docs/latest/
- **Vitest:** https://vitest.dev/
- **Conventional Commits:** https://www.conventionalcommits.org/
- **Design System (DESIGN.md):** Ver archivo adjunto en el proyecto.
- **Brand Guidelines (brand_guidelines.md):** Ver archivo adjunto en el proyecto.

---

*Documento generado para: Iglesia Adventista del Séptimo Día · Baja California*  
*Versión del documento: 1.0.0 · Última actualización: 2025*  
*Clasificación: Uso interno — No distribuir*
