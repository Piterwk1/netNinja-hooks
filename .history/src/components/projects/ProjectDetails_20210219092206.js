/* eslint-disable react/destructuring-assignment */

import React from 'react';

const ProjectDetails = (props) => {
  console.log(props);
  // eslint-disable-next-line react/prop-types
  const { id } = props.match.params;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            suscipit quis nostrum nulla dignissimos eveniet dolor alias vitae
            quibusdam, laudantium commodi sint ipsam, quos, sit consequatur
            impedit explicabo cum dicta?
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Piotr K</div>
            <div>19 February, 9am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
