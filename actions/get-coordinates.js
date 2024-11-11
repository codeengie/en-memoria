'use server';

export const getCoordinates = async function () {
	const location = process.env.LOCATION_CITY_STATE.split(',');

	if (location === undefined) {
		throw new Error('Location environment variable is not set');
	}

	const params = new URLSearchParams({
		city: location[0],
		state: location[1],
		format: 'json'
	});

	try {
		const response = await fetch(
			`https://nominatim.openstreetmap.org/search?${params.toString()}`
		);

		if (!response.ok) {
			throw new Error('Failed to fetch location');
		}

		const data = await response.json();

		return {
			latitude: data[0].lat,
			longitude: data[0].lon
		};
	} catch (error) {
		console.error('Error getting location', error);
		return null;
	}
};
