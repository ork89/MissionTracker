import React from 'react';

import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import classes from './TaskItem.module.css';

const TaskItem = props => {
    return (
        <div className={classes.TaskItem} >
            <div className={classes.project}>
                <ChevronRightOutlinedIcon /> {props.project}
            </div>
            <p className={classes.description}>{props.description}</p>
            <div className={classes.details}>
                <p className={classes.time}>{props.time}</p>
                <p className={classes.date}>{props.date}</p>
                <p className={classes.priority}>Priority: {props.priority}</p>
            </div>            
        </div>
    )
}

export default TaskItem;