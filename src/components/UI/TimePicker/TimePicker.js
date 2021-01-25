import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 100,
	},
}));

const TimePicker = props => {
	const classes = useStyles();

	return (
		<form className={classes.container} noValidate>
			<TextField
				id='time'
				// label={props.label}
				type='time'
				defaultValue={props.time}
				className={classes.textField}
				InputLabelProps={{
					shrink: true,
				}}
				inputProps={{
					step: 300, // 5 min
				}}
			/>
		</form>
	);
};

export default TimePicker;
