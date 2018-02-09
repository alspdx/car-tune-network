import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

function Error404(props){
  return (
    <div>
      <h2>Oops! I'm afraid the page you were trying to visit at {props.location.path} does not exist!</h2>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
