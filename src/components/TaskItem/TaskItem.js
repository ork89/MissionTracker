import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import SelectInput from '../UI/Input/SelectInput';
import DatePicker from '../UI/DatePicker/DatePicker';
import TimeDialog from '../UI/Dialog/TimeDialog';

import classes from './TaskItem.module.css';

const useStyles = makeStyles(theme => ({
	margin: {
		margin: theme.spacing(3),
		width: 'inherit',
	},
}));

const TaskItem = props => {
	const styles = useStyles();
	const {
		startTimeInput,
		endTimeInput,
		totalTimeInput,
		project,
		key,
		date,
		priority,
		description,
	} = props;
	const [anchorEl, setAnchorEl] = useState(null);
	const [startTime, setStartTime] = useState(startTimeInput);
	const [endTime, setEndTime] = useState(endTimeInput);
	const [totalTime, setTotalTime] = useState(totalTimeInput);

	const priorities = ['Non Issue', 'Low', 'Medium', 'High'];

	const padWithZero = time => {
		return time.length < 2 ? time.padStart(2, '0').toString() : '';
	};

	const getTimeDifference = useCallback((startFullDate, endFullDate) => {
		const durationInHours = endFullDate.diff(startFullDate, 'hours');
		const durationInMinutes = endFullDate.diff(startFullDate, 'minutes') % 60;
		const durationInSeconds = endFullDate.diff(startFullDate, 'seconds') % 60;

		const totalTimeArr = [durationInHours, durationInMinutes, durationInSeconds];
		totalTimeArr.map(item => {
			return padWithZero(item.toString());
		});

		setTotalTime(totalTimeArr.join(':'));
	}, []);

	useEffect(() => {
		const startFullDate = moment(new Date(date.toString().replace('00:00:00', startTime)));
		const endFullDate = moment(new Date(date.toString().replace('00:00:00', endTime)));

		getTimeDifference(startFullDate, endFullDate);
	}, [date, startTime, endTime, getTimeDifference]);

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
		setStartTime(`${hours}:${minutes}:${seconds}`);
	};

	const updateEndTime = (minutes, hours, seconds) => {
		setEndTime(`${hours}:${minutes}:${seconds}`);
	};

	return (
		<div className={classes.TaskItem}>
			<DoubleArrowIcon style={{ fontSize: 12, color: '#A0A0A0', marginLeft: 10 }} />
			<div className={classes.project}>{project}</div>
			<div className={classes.description}>
				<InputBase
					className={styles.margin}
					defaultValue={description}
					inputProps={{ 'aria-label': 'naked' }}
				/>
			</div>
			<SelectInput
				selectId={Math.floor(Math.random(key) * 1000)}
				defaultValue={priority}
				inputOptions={priorities}
			/>
			<div className={classes.details}>
				<div className={classes.container}>
					<div className={classes.timeControlsContainer}>
						<TimeDialog
							key={key}
							dialogTitle='Start Time'
							textFieldLabel='Start time'
							textFieldType='text'
							btnOpenLabel={startTime}
							value={startTime}
							setTime={updateStartTime}
						/>
						<TimeDialog
							dialogTitle='End Time'
							textFieldLabel='End time'
							textFieldType='text'
							btnOpenLabel={endTime}
							value={endTime}
							setTime={updateEndTime}
						/>
					</div>
					<p className={classes.time}>{totalTime}</p>
					<DatePicker date={date} />
				</div>
			</div>
			<div className={classes.optionsMenu}>
				<IconButton
					aria-label='taskOptions'
					aria-controls='options-menu'
					aria-haspopup='true'
					onClick={handleClick}>
					<MoreVertIcon fontSize='small' />
				</IconButton>

				<Menu
					id='options-menu'
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}>
					<MenuItem onClick={handleClose}>Duplicate to another project</MenuItem>
					<MenuItem onClick={handleDelete}>Delete</MenuItem>
				</Menu>
			</div>
		</div>
	);
};

export default TaskItem;
