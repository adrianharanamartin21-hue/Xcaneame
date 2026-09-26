import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';

export const MyVideo: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#0b0b0f',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1
				style={{
					color: 'white',
					fontFamily: 'Arial, sans-serif',
					fontSize: 80,
					opacity,
				}}
			>
				Xcaneame
			</h1>
		</AbsoluteFill>
	);
};
