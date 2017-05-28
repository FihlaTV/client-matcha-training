import React from 'react';
import PropTypes from 'prop-types';
import '../sass/error.css';

// const div
export const ErrorMsg = ({ msg, type, remove }) => {
  let style = {};
  if (type === 'err') style = { background: 'rgba(255, 97, 86, 1)' };
  else {
    style = { background: 'rgba(78, 186, 56, 1)' };
  }
  return (
    <div className="Errormsg" style={style}>
      <div className="close" onClick={remove} aria-hidden>X</div>
      <div className="msg">{msg}</div>
    </div>
  );
};

ErrorMsg.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export const SuccessMsg = ({ msg }) => <div className="Successmsg">{msg}</div>;

SuccessMsg.propTypes = {
  msg: PropTypes.string.isRequired,
};
