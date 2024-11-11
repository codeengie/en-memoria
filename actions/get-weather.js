'use server';

export const getWeather = async (latitude, longitude) => {
	/*const latitude = process.env.LOCATION_LATITUDE;
	const longitude = process.env.LOCATION_LONGITUDE;*/

	/*
	 * I thought about using `!` operator to shorten the operation, but I figured it would
	 * be more precise to use `undefined` since it's what Next.js sets empty or non-existent
	 * environment variables.
	 */
	/*if (latitude === undefined || longitude === undefined) {
		throw new Error('Location environment variables are not set');
	}
*/
	/*
	 * Initially I was adding `toString()` to latitude/longitude because of the sample
	 * code Open-Meteo has on their website. But Next.js by default converts all environment
	 * variables into strings.
	 */
	const params = new URLSearchParams({
		latitude: latitude,
		longitude: longitude,
		current: ['temperature_2m', 'weather_code'],
		temperature_unit: 'fahrenheit',
		timezone: 'auto'
	});
	const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Failed to fetch weather data');
		}

		const data = await response.json();
		return {
			temp: data.current.temperature_2m,
			unit: data.current_units.temperature_2m,
			code: data.current.weather_code
		};
	} catch (error) {
		console.error('Error fetching weather data', error);
		return null;
	}
};
