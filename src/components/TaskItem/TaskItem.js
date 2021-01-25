import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import TimeDialog from '../UI/Dialog/TimeDialog';
import DatePicker from '../UI/DatePicker/DatePicker';
import SelectInput from '../UI/Input/SelectInput';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
	const [priority, setPriority] = useState(props.priority);
	const [anchorEl, setAnchorEl] = useState(null);
	const [startTime, setStartTime] = useState(props.startTime);
	const [endTime, setEndTime] = useState(props.endTime);

	const { date } = props;
	const [totalTime, setTotalTime] = useState(props.totalTime);

	const getTimeDifference = useCallback((startFullDate, endFullDate) => {
		const durationInHours = endFullDate.diff(startFullDate, 'hours');
		const durationInMinutes = endFullDate.diff(startFullDate, 'minutes') % 60;
		const durationInSeconds = endFullDate.diff(startFullDate, 'seconds') % 60;

		let totalTimeArr = [durationInHours, durationInMinutes, durationInSeconds];
		totalTimeArr.map(item => {
			return padWithZero(item.toString());
		});

		setTotalTime(totalTimeArr.join(':'));
	}, []);

	useEffect(() => {
		let startFullDate = moment(new Date(date.toString().replace('00:00:00', startTime)));
		let endFullDate = moment(new Date(date.toString().replace('00:00:00', endTime)));

		getTimeDifference(startFullDate, endFullDate);
	}, [date, startTime, endTime, getTimeDifference]);

	const padWithZero = time => {
		if (time.length < 2) {
			return time.padStart(2, '0').toString();
		}
	};

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDelete = id => {
		props.deleteItem(id);
		setAnchorEl(null);
	};

	const updateStartTime = (minutes, hours, seconds) => {
		setStartTime(hours + ':' + minutes + ':' + seconds);
	};

	const updateEndTime = (minutes, hours, seconds) => {
		setEndTime(hours + ':' + minutes + ':' + seconds);
	};

	return (
		<div className={classes.TaskItem}>
			<DoubleArrowIcon style={{ fontSize: 12, color: '#A0A0A0' }} />
			<div className={classes.project}>{props.project}</div>
			<div className={classes.description}>
				<InputBase className={styles.margin} defaultValue={props.description} inputProps={{ 'aria-label': 'naked' }} />
			</div>
			<SelectInput priority={priority} />
			<div className={classes.details}>
				<div className={classes.container}>
					<TimeDialog dialogTitle='Start Time' textFieldLabel='Start time' textFieldType='text' btnOpenLabel={startTime} value={startTime} setTime={updateStartTime} />
					<TimeDialog dialogTitle='End Time' textFieldLabel='End time' textFieldType='text' btnOpenLabel={endTime} value={endTime} setTime={updateEndTime} />
					<p className={classes.time}>{totalTime}</p>
					<DatePicker date={props.date} />
				</div>
			</div>
			<div className={classes.optionsMenu}>
				<IconButton aria-label='taskOptions' aria-controls='options-menu' aria-haspopup='true' onClick={handleClick}>
					<MoreVertIcon fontSize='small' />
				</IconButton>

				<Menu id='options-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
					<MenuItem onClick={handleClose}>Duplicate to another project</MenuItem>
					<MenuItem onClick={handleDelete}>Delete</MenuItem>
				</Menu>
			</div>
		</div>
	);
};

export default TaskItem;
