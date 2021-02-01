import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import classes from './TimerControl.module.css';

const TimerControl = props => {
	const { started, paused, stopped, disabled } = props;

	if (disabled) {
		return (
			<div className={classes.TimerControl}>
				<IconButton onClick={started} color='primary'>
					<PlayCircleOutlineIcon fontSize='large' />
				</IconButton>
			</div>
		);
	}
	return (
		<div className={classes.TimerControl}>
			<IconButton onClick={started} color='primary'>
				<PlayCircleOutlineIcon fontSize='large' />
			</IconButton>
			<IconButton onClick={paused}>
				<PauseCircleOutlineIcon fontSize='large' />
			</IconButton>
			<IconButton onClick={stopped} color='secondary'>
				<HighlightOffIcon fontSize='large' />
			</IconButton>
		</div>
	);
};

export default TimerControl;
