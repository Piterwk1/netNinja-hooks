import React from 'react';
import PropTypes from 'prop-types';
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

ProjectList.propTypes = {
  projects: PropTypes.array,
};

export default ProjectList;
