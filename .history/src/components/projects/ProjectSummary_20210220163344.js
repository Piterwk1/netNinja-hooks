import React from 'react';
import PropTypes from 'prop-types';

const ProjectSummary = ({ project }) => (
  <div className="card z-depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <p>Posted By Piotr K</p>
      <p className="grey-text">18rd February, 9pm</p>
    </div>
  </div>
);

ProjectSummary.propTypes = {
  project: PropTypes.array,
};

export default ProjectSummary;
