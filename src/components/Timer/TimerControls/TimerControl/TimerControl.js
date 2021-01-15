import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import PausePresentationIcon from '@material-ui/icons/PausePresentation';
import classes from './TimerControl.module.css';

const TimerControl = props => {
	if (props.disabled) {
		return (
			<div className={classes.TimerControl}>
				<IconButton onClick={props.started} color='primary'>
					<SlideshowIcon fontSize='large' />
				</IconButton>
			</div>
		);
	} else {
		return (
			<div className={classes.TimerControl}>
				<IconButton onClick={props.started} color='primary'>
					<SlideshowIcon fontSize='large' />
				</IconButton>
				<IconButton onClick={props.paused}>
					<PausePresentationIcon fontSize='large' />
				</IconButton>
				<IconButton onClick={props.stopped} color='secondary'>
					<CancelPresentationIcon fontSize='large' />
				</IconButton>
			</div>
		);
	}
};

export default TimerControl;
