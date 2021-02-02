import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiInput from '../UI/Input/MuiInput';
import SelectInput from '../UI/Input/SelectInput';
import classes from './ProjectItem.module.css';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '15ch',
		},
		'& .MuiInput-underline:before': {
			display: 'none',
		},
	},
}));

const ProjectItem = props => {
	const styles = useStyles();
	const [selectedOption, setSelectedOption] = useState();
	const statusOptions = ['Created', 'In-Progress', 'Postponed', 'Done'];
	const { projectName, totalTime, client, status, projectId } = props;

	const handleSelectedValue = value => {
		setSelectedOption(value);
	};

	return (
		<div className={classes.ProjectItem}>
			<div className={classes.container}>
				<form className={styles.root} noValidate autoComplete='off'>
					<MuiInput
						id={`${projectId} name`}
						label='Project name'
						size='small'
						value={projectName}
					/>
					<MuiInput
						id={`${projectId} totalTime`}
						label='Total Time'
						size='small'
						value={totalTime}
					/>
					<MuiInput
						id={`${projectId} client`}
						label='Client'
						size='small'
						value={client}
					/>

					<SelectInput
						selectId={Math.floor(Math.random(projectId) * 1000)}
						defaultValue={status}
						inputOptions={statusOptions}
						selectedValue={handleSelectedValue}
					/>
				</form>
			</div>
		</div>
	);
};

export default ProjectItem;
