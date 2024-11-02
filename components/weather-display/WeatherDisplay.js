import { getWeather } from '@/actions/get-weather';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
	const [temp, setTemp] = useState(null);
	const [icon, setIcon] = useState(null);

	useEffect(() => {
		const fetchTemp = async () => {
			// @todo Replace hardcoded values
			const latitude = 33.8959;
			const longitude = -118.2201;

			const temp = await getWeather(latitude, longitude);

			if (temp !== null) {
				setTemp(
					`${Math.round(temp.currentTemp)}${temp.currentUnit.toLowerCase()}`
				);
				setIcon(temp.weatherCode);
			}
		};

		fetchTemp();
	}, []);

	return (
		<div {...props}>
			<div>{temp}</div>
			<div>
				<Image
					alt={`A ${weatherIconMap[icon]} weather icon`}
					height={28}
					src={`/icons/weather/${weatherIconMap[icon]}.svg`}
					width={28}
				/>
			</div>
		</div>
	);
};

export default WeatherDisplay;
