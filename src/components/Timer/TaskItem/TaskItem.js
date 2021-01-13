import React from 'react';

import classes from './Task.module.css';

const TaskItem = props => {
    return (
        <div className={classes.TaskItem} >
            <span>This is a task item</span>
        </div>
    )
}

export default TaskItem;