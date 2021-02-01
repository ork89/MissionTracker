import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

import classes from './SideDrawer.module.css';

const SideDrawer = props => {
	const { open, closed } = props;
	let attachedClasses = [classes.SideDrawer, classes.Close];

	if (open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}

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
			</div>
		</Auxiliary>
	);
};

export default SideDrawer;
