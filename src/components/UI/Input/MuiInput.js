import React from 'react';
import TextField from '@material-ui/core/TextField';

const MuiInput = props => {
	const { id, label, size, value } = props;

	return <TextField id={id} label={label} size={size} value={value} />;
};
export default MuiInput;
