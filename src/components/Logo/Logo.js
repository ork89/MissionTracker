import React, { Fragment } from 'react';

import MissionTrackerLogo from '../../assets/MissionTrackerLogo.png';
import ToggleLogo from '../../assets/ToggleLogo.png';
import classes from './Logo.module.css';

const Logo = () => (
	<>
		<div className={classes.Logo}>
			<img src={MissionTrackerLogo} alt='MissionTrackerLogo' />
		</div>
		<div className={classes.ToggleLogo}>
			<img src={ToggleLogo} alt='MissionTrackerLogo' />
		</div>
	</>
);

export default Logo;
