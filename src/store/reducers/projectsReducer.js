import React from 'react';

const projectsReducer = (state = 0, action) => {
	switch (action.type) {
		case 'CREATE_NEW_PROJECT':
			return state;

		default:
			return state;
	}
};

export default projectsReducer;
