import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import classes from './TaskItem.module.css';

const useStyles = makeStyles(theme => ({
	margin: {
		margin: theme.spacing(3),
		width: 'inherit',
	},
}));

const TaskItem = props => {
	const styles = useStyles();

	return (
		<div className={classes.TaskItem}>
			<DoubleArrowIcon style={{ fontSize: 12, color: '#A0A0A0' }} />
			<div className={classes.project}>{props.project}</div>
			<div className={classes.description}>
				<InputBase className={styles.margin} defaultValue={props.description} inputProps={{ 'aria-label': 'naked' }} />
			</div>
			{/* <p className={classes.description}>{props.description}</p> */}
			<p className={classes.priority}>Priority: {props.priority}</p>
			<div className={classes.details}>
				<div className={classes.container}>
					<p>{props.time}</p>
					<p className={classes.date}>{props.date}</p>
				</div>
			</div>
			<div className={classes.controls}>
				{/* <EditIcon fontSize='small' />
				<DeleteOutlineIcon fontSize='small' /> */}
				<IconButton aria-label='taskOptions'>
					<MoreVertIcon fontSize='small' />
				</IconButton>
			</div>
		</div>
	);
};

export default TaskItem;
