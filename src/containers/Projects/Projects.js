import React, { useState } from 'react';

import ProjectItem from '../../components/ProjectItem/ProjectItem';
import Table from '../../components/UI/Table/Table';

const Projects = props => {
	const [projects, setProjects] = useState([
		{
			name: 'MissionTracker',
			totalTime: '04:58:45',
			client: 'Ori M. K.',
			status: 'inprogress',
		},
	]);

	return <ProjectItem />;
};

export default Projects;
