import React, { useState } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const materialTheme = createMuiTheme({
	overrides: {
		root: {
			width: 150,
		},
		MuiInputUnderline: {
			content: '',
			color: '#FFF',
			'& .MuiInput-underline:before': {
				content: '',
			},
		},
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: '#7CDFBF',
			},
		},
		MuiPickersCalenderHeader: {
			backgroundColor: '#7CDFBF',
		},
		MuiPickersDay: {
			day: {
				color: '#7CDFBF',
			},
			daySelected: {
				backgroundColor: '#7CDFBF',
			},
			dayDisabled: {
				color: '#7CDFBF',
			},
			current: {
				color: '#7CDFBF',
			},
		},
	},
});

const useStyles = makeStyles(theme => ({
	root: {
		width: 150,
		margin: 8,
		padding: 4,
	},
	underline: {},
}));

const DatePicker = props => {
	const [selectedDate, setSelectedDate] = useState(new Date(props.date));
	const classes = useStyles();

	const handleDateChange = date => {
		setSelectedDate(date);
	};

	return (
		<ThemeProvider theme={materialTheme}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid container justify='space-around'>
					<KeyboardDatePicker
						margin='normal'
						id={`date-picker-for-Task${props.uid}`}
						format='MM/dd/yyyy'
						value={selectedDate}
						onChange={handleDateChange}
						classes={{
							root: classes.root,
						}}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>
				</Grid>
			</MuiPickersUtilsProvider>
		</ThemeProvider>
	);
};

export default DatePicker;
