export const getWeather = async (latitude, longitude) => {
	const params = new URLSearchParams({
		latitude: latitude.toString(),
		longitude: longitude.toString(),
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
			currentTemp: data.current.temperature_2m,
			currentUnit: data.current_units.temperature_2m,
			weatherCode: data.current.weather_code
		};
	} catch (error) {
		console.error('Error fetching weather data', error);
		return null;
	}
};
