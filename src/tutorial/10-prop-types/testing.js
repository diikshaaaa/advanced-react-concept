import React from 'react';
import PropTypes from 'prop-types';
// PropTypes are a mechanism to ensure that components use the correct data type and pass the right data

const testing = (props) => {
  return <div></div>;
};

testing.propTypes = {
  name: PropTypes.array.isRequired,
  // isRequired means that props element defined is required to be passed from parent component. If you don't pass it, React will give you a warning message.
};

export default testing;