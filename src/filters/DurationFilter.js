export function filterByDuration(minutes, hours, operator, projectsTotalTime) {
	const minutesInput = parseInt(minutes);
	const hoursInput = parseInt(hours);
	const hoursFromTotalTime = parseInt(projectsTotalTime.substring(0, 2));
	const minutesFromTotalTime = parseInt(projectsTotalTime.substring(3, 5));
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
}
