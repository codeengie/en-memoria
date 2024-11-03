import fs from 'fs';
import path from 'path';

export const GET = async (req, { params }) => {
	try {
		const { filename } = await params;
		const photoDirectory = process.env.PHOTO_DIRECTORY;

		console.log('Filename: ', filename);
		console.log('Photo Directory: ', photoDirectory);

		const filePath = path.join(photoDirectory, filename);

		if (fs.existsSync(filePath)) {
			const photoBuffer = await fs.readFileSync(filePath);
			return new Response(photoBuffer, {
				headers: {
					'Content-Type': 'image/png',
					'Cache-Control': 'public, max-age=3156000, immutable'
				}
			});
		}
	} catch (error) {
		console.error('Error reading photo:', error);
		return new Response(JSON.stringify({ error: 'Failed to read photo' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
