import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Select, TextField, InputLabel } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

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
	const [seconds, setSecondsValue] = useState('00');
	const [minutes, setMinutesValue] = useState('00');
	const [hours, setHoursValue] = useState('00');
	const [timeDurationOperator, setTimeDurationOperator] = useState('Longer');
	const {
		btnOpenLabel,
		variant,
		color,
		dialogTitle,
		dialogContent,
		secondsTextFieldLabel,
		minutesTextFieldLabel,
		hoursTextFieldLabel,
		textFieldType,
		origin,
		chipIcon,
	} = props;

	function initDialogFields() {
		setSecondsValue('00');
		setMinutesValue('00');
		setHoursValue('00');
	}

	const handleChangeInSeconds = event => {
		setSecondsValue(event.target.value);
	};

	const handleChangeInMinutes = event => {
		setMinutesValue(event.target.value);
	};

	const handleChangeInHours = event => {
		setHoursValue(event.target.value);
	};

	const handleSelectedValue = event => {
		setTimeDurationOperator(event.target.value);
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
		initDialogFields();
	};

	const durationOptions = ['Longer', 'Shorter', 'equal'];

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
				<DialogTitle id={`dialogTitle_${dialogTitle}`}>{dialogTitle}</DialogTitle>
				<DialogContent>
					<DialogContentText>{dialogContent}</DialogContentText>
					{origin !== undefined ? (
						<div>
							<InputLabel id='TimeDialog-select-input'>Operator</InputLabel>
							<FormControl>
								<Select
									id='TimeDialog-select-input'
									value={timeDurationOperator}
									onChange={handleSelectedValue}
									disableUnderline
									inputProps={{ 'aria-label': 'Without label' }}>
									{durationOptions.map(p => {
										return (
											<MenuItem
												autoWidth
												value={p}
												key={`TimeDialog-select-input-${p}`}>
												{p}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>
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
