import React from 'react';
import PropTypes from 'prop-types';

const ProjectSummary = ({ projects }) => (
  <div className="card z-depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">Project Title</span>
      <p>Posted By Piotr K</p>
      <p className="grey-text">18rd February, 9pm</p>
    </div>
  </div>
);

ProjectSummary.propTypes = {
  projects: PropTypes.array,
};

export default ProjectSummary;
