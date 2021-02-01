import React, { useState, Fragment } from 'react';

import TaskItem from '../../components/TaskItem/TaskItem';
import Task from '../Task/Task';
import classes from './Tracker.module.css';

const Tracker = () => {
	// TODO: Replace hardcoded tasks with tasks form the DB
	const [tasksList, setTasksList] = useState([
		{
			id: 'aabbcc',
			taskDescription: 'This is the first task of the project',
			project: 'MissionTracker',
			startTime: '08:05:10',
			endTime: '09:34:44',
			totalTime: '01:29:34',
			date: new Date('2021-01-11T00:00:00'),
			priority: 'Low',
		},
		{
			id: 'ddeeff',
			taskDescription: 'Second Task',
			project: 'MissionTracker',
			startTime: '09:34:44',
			endTime: '10:02:39',
			totalTime: '00:27:55',
			date: new Date('2021-01-12T00:00:00'),
			priority: 'Low',
		},
		{
			id: 'gghhii',
			taskDescription: 'Third Task',
			project: 'MissionTracker',
			startTime: '10:02:39',
			endTime: '13:04:11',
			totalTime: '03:01:16',
			date: new Date('2021-01-12T00:00:00'),
			priority: 'Medium',
		},
	]);

	// const inputChangedHandler = (event, inputId) => {};

	const handleDelete = id => {
		const newTasksList = tasksList.filter(item => item.id !== id);
		setTasksList(newTasksList);
	};

	return (
		<>
			<Task />
			<div className={classes.TaskItemList}>
				{tasksList.map(task => (
					<TaskItem
						key={Math.floor(Math.random() * 10000)}
						taskId={task.id}
						description={task.taskDescription}
						project={task.project}
						startTimeInput={task.startTime}
						endTimeInput={task.endTime}
						totalTimeInput={task.totalTime}
						date={task.date}
						priority={task.priority}
						deleteItem={() => handleDelete(task.id)}
						// onChange={inputChangedHandler}
					/>
				))}
			</div>
		</>
	);
};

export default Tracker;
