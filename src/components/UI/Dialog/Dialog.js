import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = props => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant={props.variant} color={props.color} onClick={handleClickOpen}>
				{props.btnOpenLabel}
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>{props.dialogTitle}</DialogTitle>
				<DialogContent>
					<DialogContentText>{props.dialogContent}</DialogContentText>
					<TextField autoFocus margin='dense' id='name' label={props.textFieldLabel} type={props.textFieldType} fullWidth />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleClose} color='primary'>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default FormDialog;
