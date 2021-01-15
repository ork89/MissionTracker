import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import classes from './TaskDescription.module.css';

const useStyles = makeStyles(theme => ({
	root: {
        '& .MuiTextField-root': {
			margin: '10px 30px 0 0',
            width: 400,
		},
	},
}));

const TaskDescription = props => {
	const classes = useStyles();
	const [description, setDescription] = useState();

	return (
		<div className={classes.root}>
			<TextField id='taskDescription' label='Give your task a description' size='large' />			
		</div>
	);
};

export default TaskDescription;
