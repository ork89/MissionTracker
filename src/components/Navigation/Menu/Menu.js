import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Menu.module.css'

const Menu = props => {
    return (
        <div className={classes.Menu}>
            <div className={classes.logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
        
}

export default Menu;