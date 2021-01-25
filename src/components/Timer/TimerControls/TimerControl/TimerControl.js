import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import classes from './TimerControl.module.css';

const TimerControl = props => {
	if (props.disabled) {
		return (
			<div className={classes.TimerControl}>
				<IconButton onClick={props.started} color='primary'>
					<PlayCircleOutlineIcon fontSize='large' />
				</IconButton>
			</div>
		);
	} else {
		return (
			<div className={classes.TimerControl}>
				<IconButton onClick={props.started} color='primary'>
					<PlayCircleOutlineIcon fontSize='large' />
				</IconButton>
				<IconButton onClick={props.paused}>
					<PauseCircleOutlineIcon fontSize='large' />
				</IconButton>
				<IconButton onClick={props.stopped} color='secondary'>
					<HighlightOffIcon fontSize='large' />
				</IconButton>
			</div>
		);
	}
};

export default TimerControl;
