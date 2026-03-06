# Notas de Política

Repositorio de notas personales sobre política construido con [Astro](https://astro.build) y [Starlight](https://starlight.astro.build).

## Características

- **Tema claro/oscuro**: Selector integrado en la barra de navegación
- **Búsqueda**: Índice de búsqueda con Pagefind
- **Navegación**: Barra lateral organizada por secciones
- **Responsive**: Diseño adaptable a móviles y escritorio

## Inicio rápido

### Requisitos previos

- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Previsualizar build de producción
pnpm preview
```

## Estructura del proyecto

```
/
├── public/              # Archivos estáticos (favicon, etc.)
├── src/
│   ├── content/
│   │   └── docs/        # Contenido en Markdown
│   │       ├── index.md # Página principal
│   │       ├── general.md
│   │       ├── paises/  # Países por región
│   │       ├── estadistica/
│   │       └── proyectos/
│   ├── styles/          # CSS personalizado (temas)
│   └── content.config.ts
└── package.json
```

## Tecnologías

- **Astro** - Framework web moderno
- **Starlight** - Tema de documentación con soporte nativo para temas claro/oscuro
- **pnpm** - Gestor de paquetes rápido y eficiente

## Contenido

Este repositorio contiene notas personales sobre política, organizadas por:

- **General**: Estudio comparativo de países
- **Países**: Información por región (Suramérica, Asia, etc.)
- **Estadísticas**: Datos y estadísticas relevantes
- **Proyectos**: Ideas y proyectos relacionados con política

## Personalización

Los colores del tema se personalizan en `src/styles/custom.css`. Starlight incluye por defecto:
- Modo claro
- Modo oscuro
- Modo automático (según preferencia del sistema)

## Autor

**Fravelz**

**Versión:** 0.0.2

---

> **Nota:** Los textos actuales no deben sacarse de contexto.
