import React, { useState } from 'react';

import TaskItem from '../../components/Timer/TaskItem/TaskItem';
import Input from '../../components/UI/Input/Input';
import classes from './TaskItemList.module.css';

const TaskItemList = props => {
	const [tasksList, setTasksList] = useState([
        {taskDescription: 'This is the first task of the project', project: 'MisTracker', time: '01:29:44', date:'12/01/2021', priority: 'low'},
        {taskDescription: 'Second Task', project: 'MisTracker', time: '00:22:55', date:'12/01/2021', priority: 'low'},
        {taskDescription: 'Third Task', project: 'MisTracker', time: '03:01:16', date:'12/01/2021', priority: 'medium'},
    ]);

    const inputChangedHandler = (event, inputId) => {

    }
 
    return (
        <div className={classes.TaskItemList}>
           
           {tasksList.map((task, index) => (               
                <TaskItem
                    key={index}
                    description={task.taskDescription}
                    project={task.project}
                    time={task.time}
                    date={task.date}
                    priority={task.priority} />
           ))}
        </div>
    )
};

export default TaskItemList;
