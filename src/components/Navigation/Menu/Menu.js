import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Menu.module.css';
import { AuthContext } from '../../../authContext';
import { logout } from '../../../store/actions/index';

const useStyles = makeStyles(theme => ({
	logout: {
		marginBottom: 30,
		color: theme.palette.success.light,
	},
}));

const Menu = props => {
	const styles = useStyles();
	const loggedIn = useContext(AuthContext);
	const { drawerToggleClicked } = props;
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div className={classes.Menu}>
			<DrawerToggle clicked={drawerToggleClicked} />
			<div className={classes.logo}>
				<Logo />
			</div>
			<nav className={classes.Desktop}>
				<NavigationItems />
			</nav>
			{loggedIn && (
				<Button onClick={handleLogout} className={styles.logout}>
					Logout
				</Button>
			)}
		</div>
	);
};

export default Menu;
