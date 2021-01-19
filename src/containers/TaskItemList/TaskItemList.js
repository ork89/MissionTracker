import React, { useState } from 'react';

import TaskItem from '../../components/TaskItem/TaskItem';
import classes from './TaskItemList.module.css';

const TaskItemList = props => {
	const [tasksList, setTasksList] = useState([
		{
			taskDescription: 'This is the first task of the project',
			project: 'MisTracker',
			startTime: '08:05:10',
			endTime: '09:34:44',
			totalTime: '01:29:44',
			date: new Date('2021-01-11T00:00:00'),
			priority: 'low',
		},
		{
			taskDescription: 'Second Task',
			project: 'MisTracker',
			startTime: '09:34:44',
			endTime: '10:02:39',
			totalTime: '00:27:55',
			date: new Date('2021-01-12T00:00:00'),
			priority: 'low',
		},
		{
			taskDescription: 'Third Task',
			project: 'MisTracker',
			startTime: '10:02:39',
			endTime: '13:04:11',
			totalTime: '03:01:16',
			date: new Date('2021-01-12T00:00:00'),
			priority: 'medium',
		},
	]);

	const inputChangedHandler = (event, inputId) => {};

	return (
		<div className={classes.TaskItemList}>
			{tasksList.map((task, index) => (
				<TaskItem
					key={index}
					description={task.taskDescription}
					project={task.project}
					startTime={task.startTime}
					endTime={task.endTime}
					totalTime={task.totalTime}
					date={task.date}
					priority={task.priority}
				/>
			))}
		</div>
	);
};

export default TaskItemList;
