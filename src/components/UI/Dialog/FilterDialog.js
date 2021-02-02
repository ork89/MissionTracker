import React, { useState } from 'react';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FilterDialog = props => {
	const [open, setOpen] = useState(false);
	const [fieldValue, setFieldValue] = useState('');
	const {
		dialogTitle,
		dialogContent,
		textFieldLabel,
		textFieldType,
		color,
		btnOpenLabel,
		optionsList,
		chipIcon,
	} = props;

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleFilter = () => {
		if (fieldValue.length > 0) {
			props.filter(fieldValue, textFieldLabel);
		}
		setOpen(false);
	};

	const handleOnChangeFilter = event => {
		setFieldValue(event.target.value);
	};

	const filterOptions = createFilterOptions({
		matchFrom: 'any',
		stringify: option => option.type,
	});

	return (
		<div>
			<Chip
				icon={chipIcon}
				label={btnOpenLabel}
				clickable
				color='primary'
				variant='outlined'
				size='small'
				onClick={handleClickOpen}
			/>
			<Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>{dialogTitle}</DialogTitle>
				<DialogContent>
					<DialogContentText>{dialogContent}</DialogContentText>
					<Autocomplete
						id='filter-status'
						options={Object.values(optionsList)}
						getOptionLabel={option => option.type}
						filterOptions={filterOptions}
						style={{ width: 150 }}
						renderInput={() => (
							<div>
								<TextField
									autoFocus
									variant='standard'
									margin='dense'
									id='name'
									label={textFieldLabel}
									type={textFieldType}
									fullWidth
									onChange={handleOnChangeFilter}
								/>
							</div>
						)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleFilter} color='primary'>
						Filter
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default FilterDialog;
