import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

function Error404(props){
  return (
    <div className='error'>
      <style jsx>{`
        .error {
          padding: var(--std-padding);
        }
      `}</style>
      <h2>Oh no! The URL ending with "{props.location.pathname}" does not exist on our server!</h2>
      <h3>Please try harder next time!</h3>
      <Link to='/'>Home</Link>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
