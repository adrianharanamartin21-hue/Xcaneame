import QRCode from 'qrcode';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const url = process.env.QR_URL || 'https://xcaneame.com';

const variants = [
	{file: 'qr-black.png', color: {dark: '#000000ff', light: '#0000'}},
	{file: 'qr-white.png', color: {dark: '#ffffffff', light: '#0000'}},
];

for (const variant of variants) {
	const outPath = path.join(publicDir, variant.file);
	await QRCode.toFile(outPath, url, {
		type: 'png',
		errorCorrectionLevel: 'H',
		margin: 1,
		width: 1000,
		color: variant.color,
	});
	console.log(`Generated ${variant.file} for "${url}"`);
}
