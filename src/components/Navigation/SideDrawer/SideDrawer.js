import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

import classes from './SideDrawer.module.css';

const SideDrawer = props => {
	let attachedClasses = [classes.SideDrawer, classes.Close];

	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}

	return (
		<Auxiliary>
			<Backdrop show={props.open} backdropClicked={props.closed} />
			{/* The <div> element has a child <button> element that allows keyboard interaction */}
			{/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
			<div
				className={attachedClasses.join(' ')}
				onClick={props.closed}
				onKeyPress={props.closed}>
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
