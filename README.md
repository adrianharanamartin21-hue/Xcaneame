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
- `src/QrOverlay.tsx` — overlay del QR real + logo + "xcaneame" (ver siguiente sección).
- `src/index.ts` — punto de entrada que Remotion usa para descubrir las composiciones.
- `remotion.config.ts` — configuración de render (formato, overwrite, etc).
- `scripts/generate-qr.mjs` — genera los PNG del QR real y escaneable.

## Overlay del QR (Escena 4 del teaser)

Genera un clip con **transparencia real** (canal alfa) que lleva el QR de verdad
(escaneable, no una alucinación de IA), el logo y el texto "xcaneame", listo para
arrastrar encima del vídeo generado por IA en Premiere/DaVinci/CapCut.

1. Generar el QR apuntando a la URL real (por defecto usa `https://xcaneame.com`):

   ```bash
   QR_URL="https://tu-url-real.com" npm run qr
   ```

2. Renderizar el overlay (elige la variante según el color de la camiseta):

   ```bash
   npm run render:overlay:light   # QR/logo/texto en negro -> camisetas claras
   npm run render:overlay:dark    # QR/logo/texto en blanco -> camisetas oscuras
   ```

   Esto genera `out/qr-overlay-light.mov` / `out/qr-overlay-dark.mov` en **ProRes 4444
   con canal alfa** — al importarlo en tu editor de vídeo, el fondo es transparente y
   solo se ve el QR + logo + texto.

3. ⚠️ **Importante sobre el QR blanco (variante "dark"):** un QR con módulos blancos
   sobre fondo oscuro se ve genial, pero **muchos lectores de QR no lo detectan** (la
   mayoría de escáneres esperan módulos oscuros sobre fondo claro). Antes de imprimir
   camisetas oscuras con QR blanco directo sobre la tela, probadlo con varios móviles
   y apps de escaneo reales. Si falla, la alternativa segura es imprimir el QR negro
   sobre una plaquita/parche de color claro, incluso en la camiseta oscura.

## Cómo usarlo desde el iPad

Esto corre en un servidor/contenedor, no en el dispositivo. Desde el iPad, entra a esta
misma sesión de Claude Code (o a la app/web que se despliegue) por Safari para pedir
renders o editar las composiciones: el trabajo pesado (Remotion + FFmpeg) lo hace el
servidor, no el iPad.
