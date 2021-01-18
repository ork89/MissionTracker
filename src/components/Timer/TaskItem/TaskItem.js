import React from 'react';

import DeleteOutlineIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LabelIcon from '@material-ui/icons/Label';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import classes from './TaskItem.module.css';

const TaskItem = props => {
	return (
		<div className={classes.TaskItem}>
			<DoubleArrowIcon style={{ fontSize: 12, color: '#A0A0A0' }} />
			<div className={classes.project}>{props.project}</div>
			<p className={classes.description}>{props.description}</p>
			<p className={classes.priority}>Priority: {props.priority}</p>
			<div className={classes.details}>
				<div className={classes.container}>
					<p>{props.time}</p>
					<p className={classes.date}>{props.date}</p>
				</div>
			</div>
			<div className={classes.controls}>
				<EditIcon fontSize='small' />
				<DeleteOutlineIcon fontSize='small' />
			</div>
		</div>
	);
};

export default TaskItem;
