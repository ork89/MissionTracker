import React from 'react';

import TimerControl from './TimerControl/TimerControl';
import classes from './TimerControls.module.css';

const TimerControls = props => {
	const { disabled } = props;

	return (
		<div className={classes.TimerControls}>
			<TimerControl
				started={() => props.timerStarted()}
				paused={() => props.timerPaused()}
				stopped={() => props.timerStopped()}
				disabled={disabled}
			/>
		</div>
	);
};

export default TimerControls;
