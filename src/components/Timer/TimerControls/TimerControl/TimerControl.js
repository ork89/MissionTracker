import React from 'react';

import Button from '../../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './TimerControl.module.css';

const TimerControl = props => {
		return (
			<div className={classes.TimerControl}>
                <Button btnType='Success' clicked={props.started}>
                    <FontAwesomeIcon icon="play-circle" />
				</Button>
				<Button btnType='Caution' clicked={props.paused}>
                    <FontAwesomeIcon icon="pause-circle" />
				</Button>
				<Button btnType='Warning' clicked={props.stopped} disabled={props.disabled}>
                    <FontAwesomeIcon icon="stop-circle" />
				</Button>
			</div>
		);

};

export default TimerControl;
