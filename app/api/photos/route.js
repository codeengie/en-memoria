import fs from 'fs';

// Reads a directory in order to generate a list of photos
export const GET = async (req) => {
	try {
		const photoDirectory = process.env.PHOTO_DIRECTORY;
		const photoExtensions = ['jpg', 'jpeg', 'png'];

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

		// Read directory
		const files = await fs.readdirSync(photoDirectory);

		// Remove photos with unsupported extensions
		const photoFiles = files.filter((file) =>
			photoExtensions.some((extensions) =>
				extensions.endsWith(extensions)
			)
		);

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
