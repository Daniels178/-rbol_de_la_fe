# 🌳 Árbol de Fe - Sistema de Visualización Misionera

Sistema completo de visualización en tiempo real para la Iglesia Adventista que transforma datos misioneros en una metáfora visual viva.

## 📋 Descripción

Árbol de Fe es una aplicación web que muestra el crecimiento espiritual de la congregación mediante un árbol interactivo donde:
- **Hojas verdes** = Miembros bautizados
- **Hojas doradas** = Nuevos bautismos recientes
- **Frutos en la canasta** = Metas cumplidas
- **Lista ABC** = Interesados en proceso de estudio

## 🚀 Tecnologías

- **Backend:** Node.js + Express + TypeScript
- **Base de Datos:** SQLite con Kysely ORM
- **Tiempo Real:** Socket.IO
- **Frontend Dashboard:** HTML5 + SVG + GSAP + Alpine.js
- **Frontend Admin:** Alpine.js + Chart.js
- **Desktop:** Electron
- **Contenedores:** Docker

## 📦 Instalación

### 1. Clonar el repositorio

```bash
cd arbol-de-fe
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

```bash
cp .env.example .env
# Editar .env con tus configuraciones
```

### 4. Ejecutar migraciones

```bash
npm run migrate
```

### 5. Iniciar servidor de desarrollo

```bash
npm run dev
```

El servidor se ejecutará en `http://localhost:3000`

## 🎯 Rutas Principales

| Ruta | Descripción |
|------|-------------|
| `/` | Redirige al dashboard |
| `/dashboard` | Vista principal del árbol misionero |
| `/admin` | Panel administrativo |
| `/api/personas` | API REST para gestión de personas |
| `/health` | Endpoint de salud del servidor |

## 👥 Usuarios por Defecto

| Usuario | Contraseña | Rol | PIN |
|---------|-----------|-----|-----|
| admin | admin123 | Administrador | 1234 |
| pastor | pastor123 | Pastor | 5678 |
| lider | lider123 | Líder | 9012 |

⚠️ **Importante:** Cambia estas credenciales en producción!

## 📁 Estructura del Proyecto

```
arbol-de-fe/
├── src/
│   ├── config/          # Configuraciones
│   ├── modules/         # Módulos de negocio
│   │   ├── personas/    # Gestión de personas
│   │   ├── feligresia/  # Feligresía
│   │   ├── abc/         # Lista ABC
│   │   └── ...
│   ├── shared/          # Código compartido
│   │   ├── db/          # Base de datos
│   │   ├── types/       # Tipos TypeScript
│   │   └── utils/       # Utilidades
│   └── index.ts         # Punto de entrada
├── client/
│   ├── dashboard/       # Dashboard proyectable
│   ├── admin/           # Panel administrativo
│   └── assets/          # CSS, JS, SVG
├── migrations/          # Migraciones de BD
├── public/              # Archivos estáticos
├── data/                # Base de datos SQLite
└── logs/                # Logs de la aplicación
```

## 🔧 Scripts Disponibles

```bash
npm run dev              # Desarrollo con hot-reload
npm run build            # Compilar TypeScript
npm run start            # Iniciar en producción
npm run migrate          # Ejecutar migraciones
npm run migrate:rollback # Revertir última migración
npm run lint             # Ejecutar linter
npm run format           # Formatear código
npm run test             # Ejecutar tests
npm run electron:dev     # Electron en desarrollo
npm run electron:build   # Construir para producción
```

## 🎨 Características Principales

### Dashboard Proyectable
- Árbol SVG con animaciones GSAP
- Filotaxis áurea para distribución de hojas
- Tiempo real con Socket.IO
- Animaciones de celebración
- Pantalla completa

### Panel Administrativo
- Gestión CRUD de personas
- Lista ABC interactiva
- Gráficos con Chart.js
- Módulo de feligresía
- Control de literatura
- Estudios bíblicos
- Reportes y estadísticas

### Sistema ABC
- **Categoría A:** Interesados nuevos (primer contacto)
- **Categoría B:** En estudio (Clase Alfa)
- **Categoría C:** Listos para bautismo

## 🔐 Seguridad

- Autenticación con JWT
- Hash de contraseñas con bcrypt
- Roles y permisos (Admin, Pastor, Líder, Miembro)
- PINs para acciones sensibles
- Helmet para headers de seguridad

## 📊 Base de Datos

Tablas principales:
- `personas` - Registro de todas las personas
- `feligreses` - Miembros bautizados
- `abc_categorias` - Categorías A, B, C
- `abc_registros` - Seguimiento de interesados
- `estudios_biblicos` - Estudios en curso
- `literatura` - Control de literatura prestada
- `usuarios` - Usuarios del sistema
- `dashboard_eventos` - Eventos para tiempo real
- `snapshots` - Instantáneas del dashboard
- `guardianes_alertas` - Alertas y recordatorios

## 🐳 Docker (Próximamente)

```bash
docker build -t arbol-de-fe .
docker run -p 3000:3000 arbol-de-fe
```

## 📝 Licencia

MIT License

---

**Desarrollado con ❤️ para la Iglesia Adventista del Séptimo Día**
