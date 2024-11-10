import { useEffect, useState } from 'react';

const DateDisplay = ({ ...props }) => {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const [prettyDate, setPrettyDate] = useState('');
	const [machineDate, setMachineDate] = useState('');

	useEffect(() => {
		const updateDate = () => {
			const date = new Date();
			const day = date.getDate();
			const monthName = months[date.getMonth()];
			const dayName = days[date.getDay()];

			setMachineDate(date.toISOString().split('T')[0]);
			setPrettyDate(`${day} ${monthName}, ${dayName}`);
		};

		// Initial call to set date
		updateDate();

		// Update every hour
		const timer = setInterval(updateDate, 60 * 60 * 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<time dateTime={machineDate} {...props}>
			{prettyDate}
		</time>
	);
};

export default DateDisplay;
