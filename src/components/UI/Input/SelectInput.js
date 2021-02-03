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
	const { defaultValue, inputOptions, selectId, id } = props;
	const [selectedInputValue, setSelectedInputValue] = useState(defaultValue);
	const uid = Math.floor(Math.random(selectId) * 1000);

	const handleChange = event => {
		const newSelectedValue = event.target.value;
		setSelectedInputValue(newSelectedValue);

		props.selectedValue(newSelectedValue);
	};

	const options = inputOptions != null ? Object.values(inputOptions) : [];

	return (
		<>
			<Select
				key={selectId}
				labelId={id}
				id={`priority-select_${selectId}`}
				value={selectedInputValue}
				onChange={handleChange}
				input={<BootstrapInput />}>
				{options.map(p => {
					return (
						<MenuItem key={uid} value={p}>
							{p}
						</MenuItem>
					);
				})}
			</Select>
		</>
	);
};

export default SelectInput;
