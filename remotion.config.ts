import {Config} from '@remotion/cli/config';
import fs from 'node:fs';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);

// This container ships a pre-downloaded headless Chromium (used by Playwright).
// Remotion's own download is blocked by network egress rules, so reuse it.
const bundledHeadlessShell =
	'/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell';
if (fs.existsSync(bundledHeadlessShell)) {
	Config.setBrowserExecutable(bundledHeadlessShell);
}
