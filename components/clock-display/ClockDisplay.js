'use client';

import { useEffect, useState } from 'react';

const ClockDisplay = ({ ...props }) => {
	const [time, setTime] = useState('');

	useEffect(() => {
		// Created method to set time immediately as opposed to waiting for setInterval to kick in
		const updateTime = () => {
			const now = new Date();
			let hours = now.getHours();
			const minutes = now.getMinutes();
			const ampm = hours >= 12 ? 'PM' : 'AM';

			// Convert to 12-hour format
			hours = hours % 12;
			// The hour '0' should be '12'
			hours = hours ? hours : 12;
			// Format time
			const timeString = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
			setTime(timeString);
		};

		// Initial call to set the time
		updateTime();

		// Update every minute
		const timer = setInterval(updateTime, 60000);

		return () => clearInterval(timer);
	}, []);

	return (
		<time dateTime={time.replace(/\s[A?P]M/g, '')} {...props}>
			{time}
		</time>
	);
};

export default ClockDisplay;
