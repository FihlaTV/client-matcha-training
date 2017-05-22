import React from 'react';
import PropTypes from 'prop-types';
import '../sass/error.css';

const ErrorMsg = ({ msg }) => (
  <div className="Errormsg">{msg}</div>
);
ErrorMsg.propTypes = {
  msg: PropTypes.string.isRequired,
};
export default ErrorMsg;
