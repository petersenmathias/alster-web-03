import { execSync } from 'child_process';
import 'dotenv/config';
import { mkdirSync, readdirSync, rmdirSync } from 'fs';

const token = process.env.STORYBLOK_TOKEN;
const space = process.env.STORYBLOK_SPACE;
const componentsDir = './storyblok/';

if (!token || !space) {
	console.error('Missing envvars.');
	process.exit(1);
}

function listFilesSync(directoryPath) {
	try {
		const entries = readdirSync(directoryPath, { withFileTypes: true });
		const files = entries.filter((entry) => entry.isFile()).map((entry) => entry.name);

		return files;
	} catch (error) {
		console.error('Error reading dir:', error);
	}
}

try {
	// Login to Storyblok
	execSync(`storyblok login --token ${token} --region eu `, { stdio: 'inherit' });
	mkdirSync(componentsDir, { recursive: true });

	execSync(
		`storyblok pull-components --space ${space} --separate-files -ppn --path ${componentsDir}`,
		{
			stdio: 'inherit'
		}
	);
	const files = listFilesSync(componentsDir);
	execSync(
		`storyblok generate-typescript-typedefs --sourceFilePaths ${files.map((file) => `${componentsDir}${file}`).join(',')} --destinationFilePath ./src/types/storyblok.d.ts`,
		{
			stdio: 'inherit'
		}
	);
} catch (error) {
	console.error('Failed:', error.message);
	process.exit(1);
} finally {
	rmdirSync(componentsDir, { recursive: true });
}
