import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = props => {
	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem exact link='/tracker'>
				Tracker
			</NavigationItem>
			<NavigationItem link='/Projects'>Projects</NavigationItem>
			<NavigationItem link='/Reports'>Reports</NavigationItem>
		</ul>
	);
};

export default NavigationItems;
