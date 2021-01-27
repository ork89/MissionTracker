import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = props => {
	const [open, setOpen] = useState(false);
	const {
		dialogTitle,
		dialogContent,
		textFieldLabel,
		textFieldType,
		variant,
		color,
		btnOpenLabel,
	} = props;

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	return (
		<div>
			<Button variant={variant} color={color} onClick={handleClickOpen}>
				{btnOpenLabel}
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>{dialogTitle}</DialogTitle>
				<DialogContent>
					<DialogContentText>{dialogContent}</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label={textFieldLabel}
						type={textFieldType}
						fullWidth
					/>
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
