import React, { useState } from 'react';
import FolderIcon from '@material-ui/icons/FolderSpecial';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import CreateIcon from '@material-ui/icons/Create';
import TimerIcon from '@material-ui/icons/Timer';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import CreateProjectDialog from '../../components/UI/Dialog/CreateProjectDialog';
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

const Projects = () => {
	const styles = useStyles();
	// TODO: Replace hardcoded projects with projects from DB
	const [projects, setProjects] = useState([
		{
			id: 1,
			name: 'Example',
			totalTime: '01:06:17',
			client: 'Ori M. K.',
			status: 'Done',
		},
		{
			id: 2,
			name: 'MissionTracker',
			totalTime: '04:58:45',
			client: 'Ori M. K.',
			status: 'In-Progress',
		},
	]);

	const handleCreateProject = (projectName, clientName) => {
		const newProject = {
			id: projects.length + 1,
			name: projectName,
			totalTime: '00:00:00',
			client: clientName,
			status: 'Created',
		};
		const updatedProject = [newProject, ...projects];
		setProjects(updatedProject);
	};

	return (
		<>
			<div className={classes.Projects}>
				<div className={classes.top_section}>
					<h4>Your Projects</h4>
					<CreateProjectDialog
						variant='contained'
						color='primary'
						size='small'
						icon={<FolderIcon />}
						btnOpenLabel='Add New'
						createProject={handleCreateProject}
					/>
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

			{projects.map(proj => {
				return (
					<ProjectItem
						key={proj.id}
						projectName={proj.name}
						totalTime={proj.totalTime}
						client={proj.client}
						status={proj.status}
						projectId={proj.id}
					/>
				);
			})}
		</>
	);
};

export default Projects;
