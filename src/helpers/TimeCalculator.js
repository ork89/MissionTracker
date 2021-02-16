import moment from 'moment';

const timeCalculator = (date, startTime, endTime) => {
	const padWithZero = time => {
		return time.length < 2 ? time.padStart(2, '0').toString() : '';
	};

	const startFullDate = moment(new Date(date.toString().replace('00:00:00', startTime)));
	const endFullDate = moment(new Date(date.toString().replace('00:00:00', endTime)));
	const durationInHours = endFullDate.diff(startFullDate, 'hours');
	const durationInMinutes = endFullDate.diff(startFullDate, 'minutes') % 60;
	const durationInSeconds = endFullDate.diff(startFullDate, 'seconds') % 60;

	const totalTimeArr = [durationInHours, durationInMinutes, durationInSeconds];

	totalTimeArr.map(item => {
		return padWithZero(item.toString());
	});

	return totalTimeArr.join(':');
};

export default timeCalculator;
