import React, { useState, Fragment } from 'react';

import Button from '@material-ui/core/Button';
import FolderIcon from '@material-ui/icons/FolderSpecial';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import CreateIcon from '@material-ui/icons/Create';
import TimerIcon from '@material-ui/icons/Timer';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Table from '../../components/UI/Table/Table';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import classes from './Projects.module.css';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(0.8),
		},
	},
}));

const prime = '#000';

const Projects = props => {
	const styles = useStyles();
	const [projects, setProjects] = useState([
		{
			name: 'MissionTracker',
			totalTime: '04:58:45',
			client: 'Ori M. K.',
			status: 'inprogress',
		},
	]);

	return (
		<>
			<div className={classes.Projects}>
				<div className={classes.top_section}>
					<h4>Your Projects</h4>
					<Button
						variant='contained'
						color='primary'
						size='small'
						startIcon={<FolderIcon />}>
						Add New
					</Button>
				</div>
			</div>
			<div className={classes.filter}>
				<h5>Filter By: </h5>
				<div className={styles.root}>
					<Chip
						icon={<CreateIcon />}
						label='Name'
						clickable
						color='primary'
						variant='outlined'
						size='small'
					/>
					<Chip
						icon={<FaceIcon />}
						label='Client'
						clickable
						color='primary'
						variant='outlined'
						size='small'
					/>
					<Chip
						icon={<TimerIcon />}
						label='Duration'
						clickable
						color='primary'
						variant='outlined'
						size='small'
					/>
					<Chip
						icon={<AssignmentIcon />}
						label='Status'
						clickable
						color='primary'
						variant='outlined'
						size='small'
					/>
				</div>
			</div>
			<ProjectItem />
		</>
	);
};

export default Projects;
