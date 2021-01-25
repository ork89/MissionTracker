import React, { useState } from 'react';

import TaskItem from '../../components/TaskItem/TaskItem';
import classes from './TaskItemList.module.css';

const TaskItemList = props => {
	const [tasksList, setTasksList] = useState([
		{
			id: 'aabbcc',
			taskDescription: 'This is the first task of the project',
			project: 'MissionTracker',
			startTime: '08:05:10',
			endTime: '09:34:44',
			totalTime: '01:29:34',
			date: new Date('2021-01-11T00:00:00'),
			priority: 'low',
		},
		{
			id: 'ddeeff',
			taskDescription: 'Second Task',
			project: 'MissionTracker',
			startTime: '09:34:44',
			endTime: '10:02:39',
			totalTime: '00:27:55',
			date: new Date('2021-01-12T00:00:00'),
			priority: 'low',
		},
		{
			id: 'gghhii',
			taskDescription: 'Third Task',
			project: 'MissionTracker',
			startTime: '10:02:39',
			endTime: '13:04:11',
			totalTime: '03:01:16',
			date: new Date('2021-01-12T00:00:00'),
			priority: 'medium',
		},
	]);

	// const inputChangedHandler = (event, inputId) => {};

	const handleDelete = id => {
		const newTasksList = tasksList.filter(item => item.id != id);
		setTasksList(newTasksList);
	};

	return (
		<div className={classes.TaskItemList}>
			{tasksList.map(task => (
				<TaskItem
					key={task.id}
					description={task.taskDescription}
					project={task.project}
					startTime={task.startTime}
					endTime={task.endTime}
					totalTime={task.totalTime}
					date={task.date}
					priority={task.priority}
					deleteItem={() => handleDelete(task.id)}
					// onChange={inputChangedHandler}
				/>
			))}
		</div>
	);
};

export default TaskItemList;
