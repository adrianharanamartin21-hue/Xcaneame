import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

// System font (no network fetch): metric-compatible with Times New Roman,
// close to the bold serif used in the brand mockups.
const fontFamily = "'Liberation Serif', Georgia, 'Times New Roman', serif";

export type QrOverlayProps = {
	// 'light' = black QR/logo/text for light-colored garments (recommended, always scans)
	// 'dark' = white QR/logo/text for dark-colored garments (verify scanning on real phones first)
	variant: 'light' | 'dark';
};

export const QrOverlay: React.FC<QrOverlayProps> = ({variant}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const isLight = variant === 'light';
	const ink = isLight ? '#000000' : '#ffffff';
	const qrSrc = staticFile(isLight ? 'qr-black.png' : 'qr-white.png');
	const logoSrc = staticFile(isLight ? 'logo-black.png' : 'logo-white.png');

	// Settle-in animation: scale + fade, timed to land on the "turn around" reveal beat.
	const entrance = spring({
		frame,
		fps,
		config: {damping: 200, stiffness: 120, mass: 0.6},
	});
	const opacity = interpolate(frame, [0, 12], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const scale = interpolate(entrance, [0, 1], [0.92, 1]);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'flex-start',
				alignItems: 'center',
				paddingTop: 520,
			}}
		>
			<div
				style={{
					opacity,
					transform: `scale(${scale})`,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Img src={qrSrc} style={{width: 560, height: 560}} />

				<div
					style={{
						marginTop: 48,
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Img src={logoSrc} style={{height: 64, marginRight: 4}} />
					<span
						style={{
							fontFamily,
							fontWeight: 700,
							fontSize: 72,
							color: ink,
							lineHeight: 1,
							letterSpacing: -1,
						}}
					>
						caneame
					</span>
				</div>
			</div>
		</AbsoluteFill>
	);
};
