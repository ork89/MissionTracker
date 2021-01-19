import React, { useState } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DatePicker from '../UI/DatePicker/DatePicker';
import TimePicker from '../UI/TimePicker/TimePicker';
// import CustomTimePicker from '../UI/TimePicker/customTimePicker';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import classes from './TaskItem.module.css';

const BootstrapInput = withStyles(theme => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderBottom: '1px solid #ced4da',
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),

		fontFamily: ['"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
		'&:focus': {
			borderColor: '#7CDFBF',
			boxShadow: '0 0 0 0.2rem rgba(124, 223, 192, 0.253);',
		},
	},
}))(InputBase);

const useStyles = makeStyles(theme => ({
	margin: {
		margin: theme.spacing(3),
		width: 'inherit',
	},
}));

const TaskItem = props => {
	const styles = useStyles();
	const [priority, setPriority] = useState(props.priority);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleChange = event => {
		setPriority(event.target.value);
	};

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.TaskItem}>
			<DoubleArrowIcon style={{ fontSize: 12, color: '#A0A0A0' }} />
			<div className={classes.project}>{props.project}</div>
			<div className={classes.description}>
				<InputBase className={styles.margin} defaultValue={props.description} inputProps={{ 'aria-label': 'naked' }} />
			</div>
			<Select id='priority-select' value={priority} onChange={handleChange} input={<BootstrapInput />}>
				<MenuItem value='noneIssue'>Non Issue</MenuItem>
				<MenuItem value='low'>Low</MenuItem>
				<MenuItem value='medium'>Medium</MenuItem>
				<MenuItem value='high'>High</MenuItem>
			</Select>
			<div className={classes.details}>
				<div className={classes.container}>
					<TimePicker label='startTime' time={props.startTime} />
					<TimePicker label='endTime' time={props.endTime} />
					<p className={classes.time}>{props.totalTime}</p>
					<DatePicker date={props.date} />
				</div>
			</div>
			<div className={classes.optionsMenu}>
				<IconButton aria-label='taskOptions' aria-controls='options-menu' aria-haspopup='true' onClick={handleClick}>
					<MoreVertIcon fontSize='small' />
				</IconButton>

				<Menu id='options-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
					<MenuItem onClick={handleClose}>Duplicate to another project</MenuItem>
					<MenuItem onClick={handleClose}>Delete</MenuItem>
				</Menu>
			</div>
		</div>
	);
};

export default TaskItem;
