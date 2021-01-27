import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = props => (
	/* The <div> element has a child <button> element that allows keyboard interaction */
	/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
	<div className={classes.DrawerToggle} onClick={props.clicked} onKeyPress={props.clicked}>
		<div />
		<div />
		<div />
	</div>
);

export default drawerToggle;
