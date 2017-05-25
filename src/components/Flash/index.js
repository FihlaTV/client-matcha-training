import React from 'react';
import PropTypes from 'prop-types';
import '../sass/error.css';

export const ErrorMsg = ({ msg }) => <div className="Errormsg">{msg}</div>;

ErrorMsg.propTypes = {
  msg: PropTypes.string.isRequired,
};

export const SuccessMsg = ({ msg }) => <div className="Successmsg">{msg}</div>;

SuccessMsg.propTypes = {
  msg: PropTypes.string.isRequired,
};
