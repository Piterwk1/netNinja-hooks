import React from 'react';
import ProjectSummary from './ProjectSummary';

// eslint-disable-next-line react/prop-types
const ProjectList = ({ projects }) => (
  <div className="project-list section">
    {projects &&
      projects.map((project) => (
        <ProjectSummary project={project} key={project.id} />
      ))}
  </div>
);

export default ProjectList;
