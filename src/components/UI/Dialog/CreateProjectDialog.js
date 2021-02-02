import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		'& :hover': {
			border: 'none',
		},
	},
}));

const CreateProjectDialog = props => {
	const styles = useStyles();
	const [open, setOpen] = useState(false);
	const [projectName, setProjectName] = useState('');
	const [clientName, setClientName] = useState('');
	const { dialogTitle, dialogContent, textFieldType, variant, color, icon, btnOpenLabel } = props;

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleCreate = () => {
		props.createProject(projectName, clientName);
		setOpen(false);
	};

	const handleChangeClientName = event => {
		setClientName(event.target.value);
	};

	const handleChangeProjectName = event => {
		setProjectName(event.target.value);
	};

	return (
		<div>
			<Button variant={variant} color={color} onClick={handleClickOpen} startIcon={icon}>
				{btnOpenLabel}
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>{dialogTitle}</DialogTitle>
				<DialogContent>
					<DialogContentText>{dialogContent}</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='projectName'
						label='Projects Name'
						type={textFieldType}
						onChange={handleChangeProjectName}
						className={styles.textField}
					/>
					<TextField
						margin='dense'
						id='clientName'
						label='Clients Name'
						type={textFieldType}
						onChange={handleChangeClientName}
						className={styles.textField}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleCreate} color='primary'>
						Create
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default CreateProjectDialog;
