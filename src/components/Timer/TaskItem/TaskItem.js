import React from 'react';

import DeleteOutlineIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LabelIcon from '@material-ui/icons/Label';
import classes from './TaskItem.module.css';

const TaskItem = props => {
    return (
        <div className={classes.TaskItem} >
            <div className={classes.project}>
                <LabelIcon style={{ fontSize: 16 }} color='primary' /> {props.project}
            </div>
            <p className={classes.description}>{props.description}</p>
            <div className={classes.details}>
                <p className={classes.time}>{props.time}</p>
                <p className={classes.date}>{props.date}</p>
                <p className={classes.priority}>Priority: {props.priority}</p>
            </div>   
            <div className={classes.controls}>
                <EditIcon fontSize='small' />
                <DeleteOutlineIcon fontSize='small' style={{color: '#cecece'}} />
            </div>
        </div>
    )
}

export default TaskItem;