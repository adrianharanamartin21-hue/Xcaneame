import {AbsoluteFill, Sequence, staticFile, OffthreadVideo} from 'remotion';
import {PlaceholderScene} from './teaser/PlaceholderScene';
import {Caption} from './teaser/Caption';
import {QrOverlay} from './QrOverlay';

// ---------------------------------------------------------------------------
// Cuando tengas los clips reales (generados con IA o grabados), pon aquí el
// nombre del archivo dentro de public/footage/ y esa escena se usará
// automáticamente en vez del placeholder de color. Ejemplo:
//   scene1: 'footage/scene1-plaza.mp4',
// ---------------------------------------------------------------------------
const FOOTAGE: Record<'scene1' | 'scene2' | 'scene3' | 'scene4', string | null> = {
	scene1: null,
	scene2: null,
	scene3: null,
	scene4: null,
};

const Scene: React.FC<{
	footageKey: keyof typeof FOOTAGE;
	label: string;
	color: string;
}> = ({footageKey, label, color}) => {
	const footage = FOOTAGE[footageKey];
	if (footage) {
		return <OffthreadVideo src={staticFile(footage)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />;
	}
	return <PlaceholderScene label={label} color={color} />;
};

export const Teaser: React.FC = () => {
	return (
		<AbsoluteFill style={{backgroundColor: 'black'}}>
			{/* Escena 1 — 0:00-0:08 — Plaza de España */}
			<Sequence from={0} durationInFrames={240}>
				<Scene footageKey="scene1" label="ESCENA 1: Plaza de España (plano épico)" color="#8a6d3b" />
				<Caption text="Sevilla lleva siglos contando su historia... en piedra. Nosotros hemos encontrado una nueva forma de contar la tuya." />
			</Sequence>

			{/* Escena 2 — 0:08-0:20 — Explicación del concepto */}
			<Sequence from={240} durationInFrames={360}>
				<Scene footageKey="scene2" label="ESCENA 2: Personalización del QR" color="#2b3a55" />
				<Caption text="Se llama Xcaneame. Tú creas tu propio código QR: con tu música, tu arte, tus redes... Lo personalizas... y te lo pones." />
			</Sequence>

			{/* Escena 3 — 0:20-0:30 — Modelos de frente, pixelados */}
			<Sequence from={600} durationInFrames={300}>
				<Scene footageKey="scene3" label="ESCENA 3: Modelos de frente (pecho pixelado)" color="#3a3a3a" />
				<Caption text="Así se presentan los que ya se atreven. Pero de frente... todavía no lo ves todo." />
			</Sequence>

			{/* Escena 4 — 0:30-0:40 — Giro, QR gigante en la espalda */}
			<Sequence from={900} durationInFrames={300}>
				<Scene footageKey="scene4" label="ESCENA 4: Giro + QR en la espalda" color="#0b1a33" />
				<QrOverlay variant="dark" />
				<Caption text="Porque lo importante está detrás. Tu QR. Tu nombre. Tu momento. Xcaneame: vístete... y que te descubran." />
			</Sequence>
		</AbsoluteFill>
	);
};
