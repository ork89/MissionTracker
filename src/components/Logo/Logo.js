import React from 'react';

import MissionTrackerLogo from '../../assets/MissionTrackerLogo.png';
import ToggleLogo from '../../assets/ToggleLogo.png';
import classes from './Logo.module.css';

const Logo = () => (
	<React.Fragment>
		<div className={classes.Logo}>
			<img src={MissionTrackerLogo} alt='MissionTrackerLogo' />
		</div>
		<div className={classes.ToggleLogo}>
			<img src={ToggleLogo} alt='MissionTrackerLogo' />
		</div>
	</React.Fragment>
);

export default Logo;
