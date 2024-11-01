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

	const date = new Date();
	const day = date.getDate();
	const monthName = months[date.getMonth()];
	const dayName = days[date.getDay()];
	const machineDate = date.toISOString().split('T')[0];
	const prettyDate = `${day} ${monthName}, ${dayName}`;

	return (
		<time dateTime={machineDate} {...props}>
			{prettyDate}
		</time>
	);
};

export default DateDisplay;
