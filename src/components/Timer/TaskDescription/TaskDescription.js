import React from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiTextField-root': {
			margin: '10px',
			width: 400,
		},
		'& .MuiInput-underline:before': {
			border: 'none',
		},
		'& .MuiInput-underline:after': {
			borderBottom: '2px solid #7CDFBF',
		},
		'& .MuiFormLabel-root.Mui-focused': {
			color: '#7CDFBF',
			fontWeight: '400',
		},
	},
}));

const TaskDescription = props => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<TextField id='taskDescription' label='Give your task a description' size='medium' />
		</div>
	);
};

export default TaskDescription;
