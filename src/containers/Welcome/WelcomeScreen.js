import { Typography } from '@material-ui/core';
import React from 'react';

import MissionTrackerLogo from '../../assets/MissionTrackerLogo.png';
import classes from './WelcomeScreen.module.css';

const WelcomeScreen = () => {
	return (
		<div className={classes.container}>
			<header>Navbar with login and signup buttons</header>
			<img src={MissionTrackerLogo} className={classes.logoImage} alt='MT-Logo' />
			<Typography variant='h5'>Designed and built by Ori M. Kosman</Typography>
		</div>
	);
};

export default WelcomeScreen;
