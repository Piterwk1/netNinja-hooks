import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProjectSummary from './ProjectSummary';

// eslint-disable-next-line react/prop-types
const ProjectList = ({ projects }) => (
  <div className="project-list section">
    {projects &&
      projects.map((project) => (
        <Link>
          <ProjectSummary project={project} key={project.id} />
        </Link>
      ))}
  </div>
);

ProjectList.propTypes = {
  projects: PropTypes.array,
};

export default ProjectList;
