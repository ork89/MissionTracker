import React from 'react';

import classes from './ProjectItem.module.css';

const ProjectItem = props => {
	return (
		<div className={classes.ProjectItem}>
			<div className={classes.container}>
				<p>Name</p>
				<p>Total Time</p>
				<p>Client</p>
				<p>Status</p>
			</div>
		</div>
	);
};

export default ProjectItem;
