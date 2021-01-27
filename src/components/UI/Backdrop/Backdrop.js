import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = props =>
	props.show ? (
		/* The <div> element has a child <button> element that allows keyboard interaction */
		/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
		<div
			className={classes.Backdrop}
			onClick={props.backdropClicked}
			onKeyPress={props.backdropClicked}
		/>
	) : null;

export default backdrop;
