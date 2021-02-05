import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import classes from './ProjectItem.module.css';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '19ch',
			verticalAlign: 'bottom',
		},
		'& .MuiInput-underline:before': {
			display: 'none',
		},
	},
	totalTimeInput: { width: '15ch' },
}));

const ProjectItem = props => {
	const styles = useStyles();
	const { projectName, totalTime, client, status, projectId } = props;
	const [selectedOption, setSelectedOption] = useState(status);
	const [anchorEl, setAnchorEl] = useState(null);
	const statusOptions = ['Created', 'In-Progress', 'Postponed', 'Done'];

	const handleSelectedValue = event => {
		setSelectedOption(event.target.value);
	};

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDelete = id => {
		props.deleteItem(id);
		setAnchorEl(null);
	};

	return (
		<div className={classes.ProjectItem}>
			<div className={classes.container}>
				<form className={styles.root} noValidate autoComplete='off'>
					<TextField
						id={`project-name-projectId-${projectId}`}
						label='Project name'
						size='medium'
						value={projectName}
					/>
					<TextField
						id={`total-time-projectId-${projectId}`}
						label='Total Time'
						size='small'
						className={styles.totalTimeInput}
						value={totalTime}
					/>
					<TextField
						id={`client-projectId-${projectId}`}
						label='Client'
						size='small'
						value={client}
					/>
					<FormControl>
						<Select
							id='ProjectItem-select-input'
							value={selectedOption}
							onChange={handleSelectedValue}
							disableUnderline>
							{statusOptions.map(p => {
								return (
									<MenuItem
										autoWidth='true'
										value={p}
										key={`ProjectItem-select-input-${projectId}`}>
										{p}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</form>
				{/* ---Tasks options menu--- */}
				<div className={classes.optionsMenu}>
					<IconButton
						aria-label='taskOptions'
						aria-controls='options-menu'
						aria-haspopup='true'
						onClick={handleClick}>
						<MoreVertIcon fontSize='small' />
					</IconButton>

					<Menu
						id={`options-menu-for-projectId-${projectId}`}
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}>
						<MenuItem onClick={handleDelete}>Delete</MenuItem>
					</Menu>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
