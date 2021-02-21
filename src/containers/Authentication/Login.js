import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from '../../components/UI/Spinner/Spinner';
import KeepingTrack from '../../assets/KeepingTrack.jpg';
import * as actions from '../../store/actions/index';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://missiontracker.com/'>
				MissionTracker
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: `url(${KeepingTrack})`,
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	imgAttr: {
		position: 'relative',
		top: '97%',
		left: '-35%',
		fontSize: 10,
		'& a:link': {
			color: '#000',
		},
		'& a:visited': {
			color: '#000',
		},
	},
	error: {
		color: theme.palette.error.main,
		fontSize: '0.75rem',
	},
}));

export default function Login() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const isLoggedIn = useSelector(state => state.auth.token);
	const isLoading = useSelector(state => state.auth.loading);
	const errorMsg = useSelector(state => state.auth.error);
	const history = useHistory();

	const handleOnSubmit = event => {
		event.preventDefault();
		dispatch(actions.auth(email, password, false));
		if (isLoggedIn !== null) history.push('/tracker');
	};

	let errors = null;

	if (errorMsg) {
		const err = errorMsg.replace(/_/g, ' ');
		errors = (
			<>
				<Grid item xs={12} sm={6}>
					<Typography component='h6' variant='h6' className={classes.error}>
						{err}
					</Typography>
				</Grid>
				<br />
			</>
		);
	}

	let form = (
		<form className={classes.form} noValidate onSubmit={handleOnSubmit}>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				id='email'
				label='Email Address'
				name='email'
				autoComplete='email'
				autoFocus
				onChange={event => setEmail(event.target.value)}
			/>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				name='password'
				label='Password'
				type='password'
				id='password'
				autoComplete='current-password'
				onChange={event => setPassword(event.target.value)}
			/>
			{errors}
			<FormControlLabel
				control={<Checkbox value='remember' color='primary' />}
				label='Remember me'
			/>
			<Button
				type='submit'
				fullWidth
				variant='contained'
				color='primary'
				className={classes.submit}>
				Sign In
			</Button>
			<Grid container>
				<Grid item xs>
					<Link href='/signin' variant='body2'>
						Forgot password?
					</Link>
				</Grid>
				<Grid item>
					<Link href='/signup' variant='body2'>
						Don&apos;t have an account? Sign Up
					</Link>
				</Grid>
			</Grid>
			<Box mt={5}>
				<Copyright />
			</Box>
		</form>
	);

	let authRedirect = null;
	// console.log({ isLoggedIn });
	if (isLoggedIn !== null) authRedirect = <Redirect exact to='/tracker' />;

	if (isLoading) form = <Spinner />;

	return (
		<Grid container component='main' className={classes.root}>
			{authRedirect}
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image}>
				<Typography variant='caption' className={classes.imgAttr}>
					Photo by{' '}
					<a href='https://unsplash.com/@stilclassics?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
						STIL
					</a>{' '}
					on{' '}
					<a href='https://unsplash.com/s/photos/time?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
						Unsplash
					</a>
				</Typography>
			</Grid>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					{form}
				</div>
			</Grid>
		</Grid>
	);
}
