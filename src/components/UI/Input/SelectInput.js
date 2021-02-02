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
	const [selectedInputValue, setSelectedInputValue] = useState(defaultValue);
	let uid = Math.floor(Math.random(selectId) * 1000);

	const handleChange = event => {
		setSelectedInputValue(event.target.value);
		const value = event.target.value;

		props.selectedValue(value);
	};

	const options = inputOptions != null ? Object.values(inputOptions) : [];

	return (
		<React.Fragment>
			<Select
				key={selectId}
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
		</React.Fragment>
	);
};

export default SelectInput;
