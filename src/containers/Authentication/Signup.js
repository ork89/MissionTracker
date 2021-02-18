import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Spinner from '../../components/UI/Spinner/Spinner';
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
	paper: {
		marginTop: theme.spacing(8),
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
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	error: {
		color: theme.palette.error.main,
		fontSize: '0.75rem',
	},
}));

export default function SignUp() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const isLoading = useSelector(state => state.auth.loading);
	const errorMsg = useSelector(state => state.auth.error);

	const handleOnSubmit = event => {
		event.preventDefault();
		dispatch(actions.auth(email, password, true));
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
		<form className={classes.form} onSubmit={handleOnSubmit}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField
						autoComplete='fname'
						name='firstName'
						variant='outlined'
						required
						fullWidth
						id='firstName'
						label='First Name'
						autoFocus
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						variant='outlined'
						required
						fullWidth
						id='lastName'
						label='Last Name'
						name='lastName'
						autoComplete='lname'
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						onChange={event => setEmail(event.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						onChange={event => setPassword(event.target.value)}
					/>
				</Grid>
				{errors}
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox value='allowExtraEmails' color='primary' />}
						label='I want to receive inspiration, marketing promotions and updates via email.'
					/>
				</Grid>
			</Grid>
			<Button
				type='submit'
				fullWidth
				variant='contained'
				color='primary'
				className={classes.submit}>
				Sign Up
			</Button>
			<Grid container justify='flex-end'>
				<Grid item>
					<Link href='/signin' variant='body2'>
						Already have an account? Sign in
					</Link>
				</Grid>
			</Grid>
		</form>
	);

	if (isLoading) form = <Spinner />;

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				{form}
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
