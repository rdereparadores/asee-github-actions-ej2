# Landing MDE

Landing estática construida con Vite y React. El proyecto ofrece una base ligera para publicar una experiencia web rápida, responsive y fácil de desplegar en GitHub Pages.

## Stack

- [Vite](https://vite.dev/) como herramienta de desarrollo y build.
- [React](https://react.dev/) para la interfaz.
- CSS propio en `src/styles/main.css`.
- GitHub Actions + GitHub Pages para despliegue estático.

## Requisitos

- Node.js 20 o superior.
- npm, incluido con Node.js.

## Uso local

Instala dependencias con el lockfile del proyecto:

```bash
npm ci
```

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173/`.

## Build y preview

Genera la versión estática de producción en la carpeta `dist`:

```bash
npm run build
```

Revisa localmente el resultado generado:

```bash
npm run preview
```

## Alcance estático de las demos

Las pantallas y demos de esta landing son estáticas: se ejecutan completamente en el navegador y no están conectadas a un backend, base de datos, sistema de autenticación ni servicios externos reales. Cualquier contenido interactivo debe considerarse demostrativo y no incluye persistencia de datos ni integración productiva salvo que se implemente explícitamente.

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml` se ejecuta automáticamente en cada `push` a `main` y también puede lanzarse manualmente con `workflow_dispatch` desde la pestaña **Actions**.

El flujo realiza estos pasos:

1. Descarga el repositorio con `actions/checkout`.
2. Configura Node.js con `actions/setup-node`.
3. Instala dependencias con `npm ci`.
4. Construye la landing con `npm run build`.
5. Sube la carpeta `dist` generada por Vite con `actions/upload-pages-artifact`.
6. Publica el artefacto en GitHub Pages con `actions/deploy-pages`.

Para usarlo, configura GitHub Pages en el repositorio con origen **GitHub Actions** en `Settings > Pages`.

## Ajustar el base path para subdirectorios

Vite usa la opción `base` para resolver rutas de assets. En este proyecto se lee desde la variable de entorno `VITE_BASE_PATH` y, si no existe, se usa `./` por defecto:

```js
const base = process.env.VITE_BASE_PATH || './'
```

Si publicas en la raíz de un dominio o en una página de usuario/organización, normalmente puedes dejar el valor por defecto. Si publicas bajo un subdirectorio, por ejemplo `https://usuario.github.io/nombre-repo/`, construye usando ese prefijo:

```bash
VITE_BASE_PATH=/nombre-repo/ npm run build
```

También puedes definir `VITE_BASE_PATH` como variable del workflow antes del paso de build si el sitio siempre se publicará en ese subdirectorio:

```yaml
- name: Build Vite app
  run: npm run build
  env:
    VITE_BASE_PATH: /nombre-repo/
```

Asegúrate de incluir la barra inicial y final (`/nombre-repo/`) para que las rutas generadas coincidan con la URL pública.