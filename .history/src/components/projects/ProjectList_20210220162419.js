import React from 'react';
import ProjectSummary from './ProjectSummary';

// eslint-disable-next-line react/prop-types
const ProjectList = ({ projects }) => (
  <div className="project-list section">
    <ProjectSummary />
    <ProjectSummary />
    <ProjectSummary />
    <ProjectSummary />
  </div>
);

export default ProjectList;
