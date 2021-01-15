import React from 'react';

import Menu from '../../components/Navigation/Menu/Menu';
import Task from '../../containers/Task/Task';
import TaskItemList from '../../containers/TaskItemList/TaskItemList';

import classes from './Layout.module.css'

const Layout = props => {
    return(
        <React.Fragment>
            <div className={classes.navigationMenu}>
                <Menu />
            </div>
            <div className={classes.page}>
                <Task />
                <TaskItemList />
            </div>
            
            <main>{props.children}</main>
        </React.Fragment>
    );
}

export default Layout;