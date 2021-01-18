import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import classes from './TaskDescription.module.css';

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
			borderBottom: '2px solid #7cdfbf',
		},
		'& .MuiFormLabel-root.Mui-focused': {
			color: '#7cdfbf',
		},
	},
}));

const TaskDescription = props => {
	const classes = useStyles();
	const [description, setDescription] = useState();

	return (
		<div className={classes.root}>
			<TextField id='taskDescription' label='Give your task a description' size='medium' />
		</div>
	);
};

export default TaskDescription;
