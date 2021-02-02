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
import FilterDialog from '../../components/UI/Dialog/FilterDialog';
import TimeDialog from '../../components/UI/Dialog/TimeDialog';
import { filterByDuration } from '../../filters/DurationFilter.js';

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
	// TODO: Create DB and replace hardcoded projects with projects from DB
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
		{
			id: 3,
			name: 'Landing Page',
			totalTime: '00:02:18',
			client: 'Yossi Kosman',
			status: 'Created',
		},
	]);
	const [projectsList, setProjectsList] = useState([...projects]);

	const handleCreateProject = (projectName, clientName) => {
		const newProject = {
			id: projects.length + 1,
			name: projectName,
			totalTime: '00:00:00',
			client: clientName,
			status: 'Created',
		};

		console.table(newProject);
		const updatedProjectsList = [newProject, ...projects];
		setProjectsList(updatedProjectsList);
	};

	const handleFilterList = (filter, type) => {
		const updatedProjectsList = projects.filter(
			proj => proj[type].toLowerCase().trim() === filter.toLowerCase().trim()
		);
		setProjectsList(updatedProjectsList);
	};

	const handleFilterByDuration = (minutes, hours, seconds, operator) => {
		if ((minutes === '' && hours === '') || (parseInt(minutes) === 0 && parseInt(hours) === 0))
			return;

		const updatedList = projects.filter(item =>
			filterByDuration(minutes, hours, operator, item.totalTime)
		);

		setProjectsList(updatedList);
	};

	const handleClearFilters = () => {
		setProjectsList(projects);
	};

	const statusOptions = [
		{ type: 'Created' },
		{ type: 'In-Progress' },
		{ type: 'Postponed' },
		{ type: 'Done' },
	];

	const nameOptions = projects.map(item => {
		return { type: item.name };
	});

	const clientOptions = projects.map(item => {
		return { type: item.client };
	});

	return (
		<>
			{/* ---Header--- */}
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
						textFieldType='text'
					/>
				</div>
			</div>

			{/* ---Filter--- */}
			<div className={classes.filter}>
				<h5>Filter By: </h5>
				<div className={styles.root}>
					<FilterDialog
						dialogTitle='Filter by projects name'
						btnOpenLabel='Name'
						textFieldType='text'
						textFieldLabel='name'
						optionsList={nameOptions}
						chipIcon={<CreateIcon />}
						filter={handleFilterList}
					/>
					<FilterDialog
						dialogTitle='Filter by client'
						btnOpenLabel='Client'
						textFieldType='text'
						textFieldLabel='client'
						optionsList={clientOptions}
						chipIcon={<FaceIcon />}
						filter={handleFilterList}
					/>
					<TimeDialog
						dialogTitle='Filter by duration'
						textFieldLabel='duration'
						btnOpenLabel='Duration'
						textFieldType='text'
						value='00:00:00'
						chipIcon={<TimerIcon />}
						origin='projects'
						setTime={handleFilterByDuration}
					/>
					<FilterDialog
						dialogTitle='Filter by status'
						btnOpenLabel='Status'
						textFieldType='text'
						textFieldLabel='status'
						optionsList={statusOptions}
						chipIcon={<AssignmentIcon />}
						filter={handleFilterList}
					/>
					<Chip
						icon={<TimerIcon />}
						label='Clear'
						clickable
						color='default'
						variant='outlined'
						size='small'
						onClick={handleClearFilters}
					/>
				</div>
			</div>

			{/* ---Projects List--- */}
			{projectsList.map(proj => {
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
