import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 40,
		'& :hover': {
			border: 'none',
		},
	},
}));

const TimeDialog = props => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [seconds, setSecondsValue] = useState();
	const [minutes, setMinutesValue] = useState();
	const [hours, setHoursValue] = useState();

	useEffect(() => {
		const time = props.value.toString();
		setHoursValue(time.substring(0, 2));
		setMinutesValue(time.substring(3, 5));
		setSecondsValue(time.substring(6, 8));
	}, [props.value]);

	const handleChangeInSeconds = event => {
		setSecondsValue(event.target.value);
	};

	const handleChangeInMinutes = event => {
		setMinutesValue(event.target.value);
	};

	const handleChangeInHours = event => {
		setHoursValue(event.target.value);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSave = () => {
		props.setTime(minutes, hours, seconds);
		setOpen(false);
	};

	return (
		<div>
			<Button variant={props.variant} color={props.color} onClick={handleClickOpen}>
				{props.btnOpenLabel}
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>{props.dialogTitle}</DialogTitle>
				<DialogContent>
					<DialogContentText>{props.dialogContent}</DialogContentText>
					<div className={classes.container}>
						<TextField
							autoFocus
							className={classes.textField}
							margin='dense'
							size='small'
							id='hours'
							label={props.hoursTextFieldLabel}
							type={props.textFieldType}
							defaultValue={hours}
							onChange={handleChangeInHours}
						/>
						<p> : </p>
						<TextField
							className={classes.textField}
							margin='dense'
							size='small'
							id='minutes'
							label={props.minutesTextFieldLabel}
							type={props.textFieldType}
							defaultValue={minutes}
							onChange={handleChangeInMinutes}
						/>
						<p> : </p>
						<TextField
							className={classes.textField}
							margin='dense'
							size='small'
							id='seconds'
							label={props.secondsTextFieldLabel}
							type={props.textFieldType}
							defaultValue={seconds}
							onChange={handleChangeInSeconds}
						/>
					</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleSave} color='primary'>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default TimeDialog;
