import React from 'react';

import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Menu.module.css';

const Menu = props => {
	return (
		<div className={classes.Menu}>
			<DrawerToggle clicked={props.drawerToggleClicked} />
			<div className={classes.logo}>
				<Logo />
			</div>
			<nav className={classes.Desktop}>
				<NavigationItems />
			</nav>
		</div>
	);
};

export default Menu;
