import fs from 'fs';
import path from 'path';

// Uses the filename parameter to read and return a photo
export const GET = async (req, { params }) => {
	try {
		// Used await as suggested by Next.js docs to remove console error
		const { filename } = await params;
		const photoDirectory = process.env.PHOTO_DIRECTORY;
		// Join path segments together
		const filePath = path.join(photoDirectory, filename);

		if (fs.existsSync(filePath)) {
			// Read file and return its contents
			const photoBuffer = await fs.readFileSync(filePath);
			return new Response(photoBuffer, {
				headers: {
					'Content-Type': 'image/jpg',
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
