# Xcaneame

Proyecto de generación/edición automática de vídeo con [Remotion](https://www.remotion.dev/) + FFmpeg.

## Requisitos

- Node.js 18+ (probado con Node 22)
- FFmpeg instalado en el sistema (`ffmpeg -version` debe funcionar)

## Instalación

```bash
npm install
```

## Uso

Previsualizar y editar la composición en el navegador (Remotion Studio):

```bash
npm start
```

Renderizar el vídeo a un archivo `.mp4`:

```bash
npm run render -- MyVideo out/video.mp4
```

## Estructura

- `src/Root.tsx` — registra las composiciones de vídeo disponibles.
- `src/MyVideo.tsx` — composición de ejemplo (edítala o añade nuevas).
- `src/index.ts` — punto de entrada que Remotion usa para descubrir las composiciones.
- `remotion.config.ts` — configuración de render (formato, overwrite, etc).

## Cómo usarlo desde el iPad

Esto corre en un servidor/contenedor, no en el dispositivo. Desde el iPad, entra a esta
misma sesión de Claude Code (o a la app/web que se despliegue) por Safari para pedir
renders o editar las composiciones: el trabajo pesado (Remotion + FFmpeg) lo hace el
servidor, no el iPad.
