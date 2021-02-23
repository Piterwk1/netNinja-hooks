/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
  console.log(props);
  // eslint-disable-next-line react/prop-types
  // const { id } = props.match.params;
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                Posted by {project.authorFirstName} {project.authorLasttName}
              </div>
              <div>19 February, 9am</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container center">
      <p>Loading project...</p>
    </div>
  );
};

// export default ProjectDetails;

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
