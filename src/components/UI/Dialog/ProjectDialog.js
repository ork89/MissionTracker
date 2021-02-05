import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import FolderIcon from '@material-ui/icons/Folder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		maxWidth: 752,
		padding: 0,
	},
	list: {
		backgroundColor: theme.palette.background.paper,
	},
	title: {
		margin: theme.spacing(2),
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

const FormDialog = props => {
	const [open, setOpen] = useState(false);
	const { dialogTitle, variant, color, btnOpenLabel } = props;
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [projects, setProjects] = useState([
		{
			id: 1,
			name: 'MissionTracker',
			totalTime: '04:58:45',
			client: 'Ori M. K.',
			status: 'inprogress',
		},
		{
			id: 2,
			name: 'IncoMaster',
			totalTime: '76:12:19',
			client: 'Ori M. K.',
			status: 'Done',
		},

		{
			id: 3,
			name: 'Portfolio',
			totalTime: '00:38:41',
			client: 'Ori M. K.',
			status: 'inprogress',
		},
	]);

	const handleClose = () => {
		setOpen(false);
	};

	const handleSelect = () => {
		setOpen(false);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleListItemClick = id => {
		setSelectedIndex(id);
		props.selectedProject(projects[id].name);
	};

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<IconButton variant={variant} color={color} onClick={handleClickOpen}>
					<FolderOpenIcon />
					{btnOpenLabel}
				</IconButton>
				<h5>{projects[selectedIndex].name}</h5>
			</div>
			<Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>{dialogTitle}</DialogTitle>
				<DialogContent>
					<Grid item md={12}>
						<Typography variant='h6' className={classes.title}>
							Select a project
						</Typography>
						<div className={classes.list}>
							<List>
								{projects.map((proj, index) => (
									<ListItem
										key={proj.id}
										button
										defaultValue={props.defaultValue}
										selected={selectedIndex === index}
										onClick={event => handleListItemClick(index)}>
										<ListItemIcon>
											<FolderIcon />
										</ListItemIcon>
										<ListItemText primary={proj.name} />
									</ListItem>
								))}
							</List>
						</div>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleSelect} color='primary'>
						Select
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default FormDialog;
