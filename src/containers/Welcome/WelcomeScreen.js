import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { Box, Typography, Link } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import MissionTrackerLogo from '../../assets/MissionTrackerLogo.png';
import classes from './WelcomeScreen.module.css';

const WelcomeScreen = () => {
	const history = useHistory();

	const handleLogin = () => {
		history.push('/login');
	};

	const handleRegister = () => {
		history.push('/signup');
	};

	return (
		<div className={classes.root}>
			<Container>
				<AppBar position='static'>
					<Toolbar>
						<Typography variant='h5' className={classes.title}>
							MissionTracker
						</Typography>
						<div className={classes.navigation}>
							<Button color='inherit' onClick={handleLogin}>
								Login
							</Button>
							<Button color='inherit' onClick={handleRegister}>
								Register
							</Button>
						</div>
					</Toolbar>
				</AppBar>
				<Box m={10}>
					<img src={MissionTrackerLogo} className={classes.logoImage} alt='MT-Logo' />
					<Typography variant='h6' color='textSecondary'>
						Designed and built by Ori M. Kosman
					</Typography>
				</Box>
			</Container>
		</div>
	);
};

export default WelcomeScreen;
