import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import filterByDuration from '../../helpers/DurationFilter';
import { fetchProjects, saveProjectInDB } from '../../store/actions/projectsActions';
import Spinner from '../../components/UI/Spinner/Spinner';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		verticalAlign: 'bottom',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(0.8),
		},
	},
}));

const Projects = () => {
	const styles = useStyles();
	const fetchedProjects = useSelector(state => state.projects.projects);
	const isLoading = useSelector(state => state.projects.loading);
	const [projectsList, setProjectsList] = useState(fetchedProjects);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProjects());
		setProjectsList(fetchedProjects);
	}, []);

	const handleCreateProject = (projectName, clientName) => {
		dispatch(saveProjectInDB(projectName, clientName));
	};

	const handleDelete = id => {
		const newProjectsList = projectsList.filter(item => item.id !== id);
		setProjectsList(newProjectsList);
	};

	const handleFilterList = (filter, type) => {
		const updatedProjectsList = projectsList.filter(proj => {
			return proj[type].toLowerCase().trim().includes(filter);
		});
		setProjectsList(updatedProjectsList);
	};

	const handleFilterByDuration = (minutes, hours, seconds, operator) => {
		if (
			(minutes === '' && hours === '') ||
			(parseInt(minutes, 10) === 0 && parseInt(hours, 10) === 0)
		)
			return;

		const updatedList = projectsList.filter(item =>
			filterByDuration(minutes, hours, operator, item.totalTime)
		);

		setProjectsList(updatedList);
	};

	const handleClearFilters = () => {
		setProjectsList(fetchedProjects);
	};

	const statusOptions = [
		{ type: 'Created' },
		{ type: 'In-Progress' },
		{ type: 'Postponed' },
		{ type: 'Done' },
	];

	const nameOptions = projectsList.map(item => {
		return { type: item.name };
	});

	const clientOptions = projectsList.map(item => {
		return { type: item.client };
	});

	const listOfProjects = projectsList.length === 0 ? fetchedProjects : projectsList;
	let projects = listOfProjects.map(proj => {
		return (
			<ProjectItem
				key={proj.id}
				projectName={proj.name}
				totalTime={proj.totalTime}
				client={proj.client}
				status={proj.status}
				projectId={proj.id}
				deleteItem={() => handleDelete(proj.id)}
			/>
		);
	});

	if (isLoading) {
		projects = <Spinner />;
	}

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
			{projects}
			{/* {projectsList.map(proj => {
					return (
						<ProjectItem
							key={proj.id}
							projectName={proj.name}
							totalTime={proj.totalTime}
							client={proj.client}
							status={proj.status}
							projectId={proj.id}
							deleteItem={() => handleDelete(proj.id)}
						/>
					);
				})} */}
		</>
	);
};

export default Projects;
