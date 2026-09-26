import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const Caption: React.FC<{text: string}> = ({text}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();
	const fadeFrames = Math.round(fps * 0.3);

	const opacity = interpolate(
		frame,
		[0, fadeFrames, durationInFrames - fadeFrames, durationInFrames],
		[0, 1, 1, 0],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
	);

	return (
		<AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center'}}>
			<div
				style={{
					opacity,
					marginBottom: 140,
					maxWidth: '85%',
					background: 'rgba(0,0,0,0.55)',
					borderRadius: 16,
					padding: '20px 28px',
				}}
			>
				<p
					style={{
						fontFamily: 'sans-serif',
						fontWeight: 600,
						fontSize: 34,
						color: 'white',
						textAlign: 'center',
						margin: 0,
						lineHeight: 1.3,
					}}
				>
					{text}
				</p>
			</div>
		</AbsoluteFill>
	);
};
