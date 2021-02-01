import React from 'react';

import classes from './Timer.module.css';

const Timer = props => {
	const { seconds, minutes, hours } = props;
	return (
		<div className={classes.Timer}>
			<h2 className={classes.clock}>
				{hours} : {minutes} : {seconds}
			</h2>
		</div>
	);
};

export default Timer;
