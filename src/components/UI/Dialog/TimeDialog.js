import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';
import SelectInput from '../Input/SelectInput';
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
	const [timeDurationOperator, setTimeDurationOperator] = useState('Longer');
	const {
		value,
		btnOpenLabel,
		variant,
		color,
		dialogTitle,
		dialogContent,
		secondsTextFieldLabel,
		minutesTextFieldLabel,
		hoursTextFieldLabel,
		textFieldType,
		key,
		origin,
		chipIcon,
	} = props;

	useEffect(() => {
		const time = value.toString();
		setHoursValue(time.substring(0, 2));
		setMinutesValue(time.substring(3, 5));
		setSecondsValue(time.substring(6, 8));
	}, [value]);

	const handleChangeInSeconds = event => {
		setSecondsValue(event.target.value);
	};

	const handleChangeInMinutes = event => {
		setMinutesValue(event.target.value);
	};

	const handleChangeInHours = event => {
		setHoursValue(event.target.value);
	};

	const handleSelectedValue = value => {
		setTimeDurationOperator(value);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSave = () => {
		props.setTime(minutes, hours, seconds, timeDurationOperator);
		setOpen(false);
	};

	const durationOptions = ['Longer', 'Shorter', 'equal'];
	let uid = Math.floor(Math.random(key) * 1000);

	return (
		<div>
			{origin === 'projects' ? (
				<Chip
					icon={chipIcon}
					label={btnOpenLabel}
					clickable
					color='primary'
					variant='outlined'
					size='small'
					onClick={handleClickOpen}
				/>
			) : (
				<Button variant={variant} color={color} onClick={handleClickOpen}>
					{btnOpenLabel}
				</Button>
			)}

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby={`form-dialog-${dialogTitle}`}>
				<DialogTitle id={`${key}-dialog`}>{dialogTitle}</DialogTitle>
				<DialogContent>
					<DialogContentText>{dialogContent}</DialogContentText>
					{origin !== undefined ? (
						<div>
							<label htmlFor='selectInput-for-TimeDialog'>Operator</label>
							<SelectInput
								id='selectInput-for-TimeDialog'
								selectId={uid}
								defaultValue=''
								inputOptions={durationOptions}
								selectedValue={handleSelectedValue}
							/>
						</div>
					) : null}
					<div className={classes.container}>
						<TextField
							autoFocus
							className={classes.textField}
							margin='dense'
							size='small'
							id='hours'
							label={hoursTextFieldLabel}
							type={textFieldType}
							defaultValue={hours}
							onChange={handleChangeInHours}
						/>
						<p> : </p>
						<TextField
							className={classes.textField}
							margin='dense'
							size='small'
							id='minutes'
							label={minutesTextFieldLabel}
							type={textFieldType}
							defaultValue={minutes}
							onChange={handleChangeInMinutes}
						/>
						<p> : </p>
						<TextField
							className={classes.textField}
							margin='dense'
							size='small'
							id='seconds'
							label={secondsTextFieldLabel}
							type={textFieldType}
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
