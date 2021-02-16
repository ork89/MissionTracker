import moment from 'moment';

const totalProjectTimeCalc = (totalTimeFromProject, totalTimeInNewTask) => {
	console.log({ totalTimeFromProject });
	const projectsTotalTime =
		totalTimeFromProject === undefined ? '00:00:00' : totalTimeFromProject;

	const newTotalTime = moment
		.duration(totalTimeFromProject)
		.add(moment.duration(totalTimeInNewTask));

	return moment.utc(newTotalTime.as('milliseconds')).format('HH:mm:ss');
};

export default totalProjectTimeCalc;
