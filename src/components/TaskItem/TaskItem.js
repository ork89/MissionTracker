import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Select, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import DatePicker from '../UI/DatePicker/DatePicker';
import TimeDialog from '../UI/Dialog/TimeDialog';

import classes from './TaskItem.module.css';

const useStyles = makeStyles(theme => ({
	margin: {
		margin: theme.spacing(3),
		width: 'inherit',
	},
	underLine: {
		'& .MuiInput-underline:before': {
			border: 'none',
			borderBottom: 'none',
		},
		'& .MuiInput-underline:hover:before': {
			borderBottom: 'none',
		},
		'& .MuiInput-underline:after': {
			borderBottom: 'none',
		},
		'&:hover': {
			borderBottom: 'none',
		},
		
		marginTop: '8px',
		minWidth: '150px',
		maxWidth: '200px',
	},
}));

const TaskItem = props => {
	const styles = useStyles();
	const {
		startTimeInput,
		endTimeInput,
		totalTimeInput,
		project,
		taskId,
		date,
		priority,
		description,
	} = props;

	const [anchorEl, setAnchorEl] = useState(null);
	const [startTime, setStartTime] = useState(startTimeInput);
	const [endTime, setEndTime] = useState(endTimeInput);
	const [totalTime, setTotalTime] = useState(totalTimeInput);
	const [inputSelectedValue, setInputSelectedValue] = useState(priority);

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

	const handleSelectedValue = event => {
		setInputSelectedValue(event.target.value);
	};

	return (
		<div className={classes.TaskItem}>
			<DoubleArrowIcon style={{ fontSize: 12, color: '#A0A0A0', marginLeft: 10 }} />
			<div className={classes.project}>{project}</div>

			{/* ---Description--- */}
			<TextField
				defaultValue={description}
				disableUnderline
				className={styles.underLine}
				style={{ margin: '20px', overflow: 'hidden' }}
				inputProps={{ 'aria-label': 'naked' }}
			/>

			<div className={classes.detailsContainer}>
				{/* ---Priority--- */}
				<div className={classes.priority}>
					<FormControl>
						<Select
							id='TaskItem-select-input'
							value={inputSelectedValue}
							onChange={handleSelectedValue}
							disableUnderline
							inputProps={{ 'aria-label': 'Without label' }}>
							{priorities.map(p => {
								return (
									<MenuItem
										autoWidth='true'
										value={p}
										key={`TaskItem-select-input-${p}`}>
										{p}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</div>

				<div className={classes.details}>
					<div className={classes.container}>
						{/* ---Start and End Time--- */}
						<div className={classes.timeControlsContainer}>
							<TimeDialog
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

						{/* ---Date--- */}
						<DatePicker date={date} uid={taskId} />
					</div>
				</div>

				{/* ---Tasks options menu--- */}
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
		</div>
	);
};

export default TaskItem;
