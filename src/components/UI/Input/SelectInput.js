import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const BootstrapInput = withStyles(theme => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
			textAlign: 'left',
		},
	},
	input: {
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		fontSize: 16,
		padding: '10px 26px 10px 26px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		textAlign: 'left',
		fontFamily: ['Roboto', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
		'&:focus': {
			borderColor: 'transparent',
			boxShadow: '0 0 0 0.2rem rgba(69, 76, 90, 0.253);',
		},
	},
}))(InputBase);

const SelectInput = props => {
	const { defaultValue, inputOptions, selectId } = props;
	const [fieldValue, setFieldValue] = useState(defaultValue);

	const handleChange = event => {
		setFieldValue(event.target.value);
	};

	const options = inputOptions != null ? Object.values(inputOptions) : [];
	console.log({ selectId });
	return (
		<Select
			key={selectId}
			id={`priority-select_${selectId}`}
			value={fieldValue}
			onChange={handleChange}
			input={<BootstrapInput />}>
			{options.map(p => {
				return <MenuItem value={p}>{p}</MenuItem>;
			})}
		</Select>
	);
};

export default SelectInput;
