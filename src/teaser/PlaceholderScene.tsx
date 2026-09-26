import {AbsoluteFill} from 'remotion';

export const PlaceholderScene: React.FC<{
	label: string;
	color: string;
}> = ({label, color}) => {
	return (
		<AbsoluteFill style={{backgroundColor: color}}>
			<AbsoluteFill
				style={{
					justifyContent: 'flex-start',
					alignItems: 'center',
					paddingTop: 80,
					paddingLeft: 60,
					paddingRight: 60,
				}}
			>
				<div
					style={{
						border: '3px dashed rgba(255,255,255,0.5)',
						borderRadius: 24,
						padding: '28px 24px',
						textAlign: 'center',
					}}
				>
					<div
						style={{
							fontFamily: 'sans-serif',
							fontWeight: 700,
							fontSize: 34,
							color: 'white',
							marginBottom: 8,
						}}
					>
						🎬 {label}
					</div>
					<div
						style={{
							fontFamily: 'sans-serif',
							fontSize: 22,
							color: 'rgba(255,255,255,0.75)',
						}}
					>
						Sustituye este placeholder por el clip real
					</div>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
