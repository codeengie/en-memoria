import { getWeather } from '@/actions/get-weather';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getCoordinates } from '@/actions/get-coordinates';

/**
 * Based of Open-Meteo WMD Weather interpretation codes (WW)
 * {@link https://open-meteo.com/en/docs Open-Meteo}
 */
const weatherIconMap = {
	0: 'clear-sky',
	1: 'partly-cloudy',
	2: 'partly-cloudy',
	3: 'overcast',
	45: 'fog',
	48: 'fog',
	51: 'light-rain',
	53: 'rain',
	55: 'heavy-rain',
	56: 'light-freezing-rain',
	57: 'freezing-rain',
	61: 'light-rain',
	63: 'rain',
	65: 'heavy-rain',
	66: 'freezing-rain',
	67: 'freezing-rain',
	71: 'light-snow',
	73: 'snow',
	75: 'heavy-snow',
	77: 'snow-grains',
	80: 'light-showers',
	81: 'showers',
	82: 'heavy-showers',
	85: 'snow-showers',
	86: 'snow-showers',
	95: 'thunderstorm',
	96: 'thunderstorm-hail',
	99: 'thunderstorm-hail'
};

const WeatherDisplay = ({ ...props }) => {
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const coordinates = await getCoordinates();
				const data = await getWeather(
					coordinates.latitude,
					coordinates.longitude
				);
				setWeather(data);
			} catch (error) {
				setError('Failed to fetch weather data. Please restart.');
				setWeather(null);
			}
		};

		fetchWeather();
	}, []);

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!weather) {
		return <div>Loading...</div>;
	}

	return (
		<div {...props}>
			<div>{`${Math.round(weather.temp)}${weather.unit.toLowerCase()}`}</div>
			<div>
				<Image
					alt={`A ${weatherIconMap[weather.code]} weather icon`}
					height={38}
					src={`/icons/weather/${weatherIconMap[weather.code]}.svg`}
					width={38}
				/>
			</div>
		</div>
	);
};

export default WeatherDisplay;
