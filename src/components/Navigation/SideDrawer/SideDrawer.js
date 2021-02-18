import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import { AuthContext } from '../../../authContext';
import { logout } from '../../../store/actions/index';
import classes from './SideDrawer.module.css';

const useStyles = makeStyles(theme => ({
	logout: {
		marginBottom: 30,
		color: theme.palette.success.light,
	},
}));

const SideDrawer = props => {
	const { open, closed } = props;
	const styles = useStyles();
	const loggedIn = useContext(AuthContext);
	const dispatch = useDispatch();
	let attachedClasses = [classes.SideDrawer, classes.Close];

	if (open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<Auxiliary>
			<Backdrop show={open} backdropClicked={closed} />
			{/* The <div> element has a child <button> element that allows keyboard interaction */}
			{/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
			<div className={attachedClasses.join(' ')} onClick={closed} onKeyPress={closed}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
				{loggedIn && (
					<Button onClick={handleLogout} className={styles.logout}>
						Logout
					</Button>
				)}
			</div>
		</Auxiliary>
	);
};

export default SideDrawer;
