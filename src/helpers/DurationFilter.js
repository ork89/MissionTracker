const filterByDuration = (minutes, hours, operator, projectsTotalTime) => {
	const minutesInput = parseInt(minutes, 10);
	const hoursInput = parseInt(hours, 10);
	const hoursFromTotalTime = parseInt(projectsTotalTime.substring(0, 2), 10);
	const minutesFromTotalTime = parseInt(projectsTotalTime.substring(3, 5), 10);
	let result = false;

	switch (operator) {
		case 'Longer':
			result =
				hoursFromTotalTime > hoursInput ||
				(hoursFromTotalTime === hoursInput && minutesFromTotalTime > minutesInput);
			break;
		case 'Shorter':
			result =
				hoursFromTotalTime < hoursInput ||
				(hoursFromTotalTime === hoursInput && minutesInput > minutesFromTotalTime);
			break;
		case 'Equal':
			result = hoursInput === hoursFromTotalTime && minutesInput === minutesFromTotalTime;
			break;
		default:
			break;
	}

	return result;
};
export default filterByDuration;
