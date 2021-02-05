import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'inline-flex',
		'& .MuiTextField-root': {
			marginTop: '10px',
			width: 150,
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
	const [inputText, setInputText] = useState('');
	const classes = useStyles();

	const handleChange = event => {
		setInputText(event.target.value);
		props.input(event.target.value);
	};

	return (
		<div className={classes.root}>
			<TextField
				id='taskDescription'
				label='Task description'
				size='medium'
				onChange={handleChange}
				defaultValue={props.defaultValue}
			/>
		</div>
	);
};

export default TaskDescription;
