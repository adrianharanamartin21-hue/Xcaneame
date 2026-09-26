import {Composition} from 'remotion';
import {MyVideo} from './MyVideo';
import {QrOverlay} from './QrOverlay';
import {Teaser} from './Teaser';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyVideo"
				component={MyVideo}
				durationInFrames={150}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="Teaser"
				component={Teaser}
				durationInFrames={1200}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="QrOverlay-Light"
				component={QrOverlay}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={{variant: 'light'}}
			/>
			<Composition
				id="QrOverlay-Dark"
				component={QrOverlay}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={{variant: 'dark'}}
			/>
		</>
	);
};
