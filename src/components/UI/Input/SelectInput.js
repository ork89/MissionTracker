import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const BootstrapInput = withStyles(theme => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderBottom: '1px solid #ced4da',
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),

		fontFamily: ['"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
		'&:focus': {
			borderColor: '#7CDFBF',
			boxShadow: '0 0 0 0.2rem rgba(124, 223, 192, 0.253);',
		},
	},
}))(InputBase);

const SelectInput = props => {
	const [priority, setPriority] = useState(props.priority);

	const handleChange = event => {
		setPriority(event.target.value);
	};

	return (
		<Select id='priority-select' value={priority} onChange={handleChange} input={<BootstrapInput />}>
			<MenuItem value='noneIssue'>Non Issue</MenuItem>
			<MenuItem value='low'>Low</MenuItem>
			<MenuItem value='medium'>Medium</MenuItem>
			<MenuItem value='high'>High</MenuItem>
		</Select>
	);
};

export default SelectInput;
