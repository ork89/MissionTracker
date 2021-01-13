import React from 'react';

import classes from './Timer.module.css';

const Timer = props => {
    return(
        
        <div className={classes.Timer}>
            <h2 className={classes.clock}>{props.hours} : {props.minutes} : {props.seconds}</h2>            
        </div>
    );
};

export default Timer;
