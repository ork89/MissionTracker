import React, { useState } from 'react';

import Menu from '../../components/Navigation/Menu/Menu';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Auxiliary from '../Auxiliary/Auxiliary';

import classes from './Layout.module.css';

const Layout = props => {
	const [isSideDrawerVisible, setIsSideDrawerVisible] = useState(false);
	const { children } = props;

	const closeSideDrawerHandler = () => {
		setIsSideDrawerVisible(false);
	};

	const sideDrawerToggleHandler = () => {
		setIsSideDrawerVisible(!isSideDrawerVisible);
	};

	return (
		<Auxiliary>
			<div className={classes.LayoutContainer}>
				<SideDrawer open={isSideDrawerVisible} closed={closeSideDrawerHandler} />
				<div className={classes.navigationMenu}>
					<Menu drawerToggleClicked={sideDrawerToggleHandler} />
				</div>
				<main className={classes.page}>{children}</main>
			</div>
		</Auxiliary>
	);
};

export default Layout;
