import React from 'react';

import MissionTrackerLogo from '../../assets/hourglass_logo.png';
import classes from './Logo.module.css';

const Logo = () => (
    <div className={classes.Logo}>
        <img src={MissionTrackerLogo} alt='MissionTrackerLogo' />
    </div>
)

export default Logo;