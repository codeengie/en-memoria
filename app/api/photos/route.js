import fs from 'fs';
import path from 'path';

// Reads a directory in order to generate a list of photos
export const GET = async (req) => {
	try {
		const photoDirectory = process.env.PHOTO_DIRECTORY;
		const photoExtensions = ['.jpg', '.jpeg', '.png'];

		if (!photoDirectory) {
			return new Response(
				JSON.stringify(
					{ error: 'Photo directory not configured' },
					{
						status: 500,
						headers: { 'Content-Type': 'application/json' }
					}
				)
			);
		}

		// Read directory, this returns an array of files and folders
		const files = await fs.readdirSync(photoDirectory);

		const photoFiles = files.filter((file) => {
			// Join paths
			const fullPath = path.join(photoDirectory, file);
			// Get file information
			const stat = fs.statSync(fullPath);
			// Get the file extension of the file path
			const extension = path.extname(file).toLowerCase();
			// Check if image is a file and includes supported extension
			return stat.isFile() && photoExtensions.includes(extension);
		});

		return new Response(JSON.stringify({ photoFiles }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Error reading photo directory:', error);
		return new Response(
			JSON.stringify({ error: 'Failed to read photo directory' }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
};
