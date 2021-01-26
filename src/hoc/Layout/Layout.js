import React, { useState } from 'react';

import Menu from '../../components/Navigation/Menu/Menu';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Task from '../../containers/Task/Task';
import TaskItemList from '../../containers/TaskItemList/TaskItemList';
import Auxiliary from '../Auxiliary/Auxiliary';

import classes from './Layout.module.css';

const Layout = props => {
	const [isSideDrawerVisible, setIsSideDrawerVisible] = useState(false);

	const closeSideDrawerHandler = () => {
		console.log('closeSideDrawerHandler: closing');
		setIsSideDrawerVisible(false);
	};

	const sideDrawerToggleHandler = () => {
		console.log('sideDrawerToggleHandler', !isSideDrawerVisible);
		setIsSideDrawerVisible(!isSideDrawerVisible);
	};

	return (
		<Auxiliary>
			<div className={classes.LayoutContainer}>
				<SideDrawer open={isSideDrawerVisible} closed={closeSideDrawerHandler} />
				<div className={classes.navigationMenu}>
					<Menu drawerToggleClicked={sideDrawerToggleHandler} />
				</div>
				<div className={classes.page}>
					<Task />
					<TaskItemList />
				</div>
			</div>
			<main>{props.children}</main>
		</Auxiliary>
	);
};

export default Layout;
