import PropTypes from 'prop-types';
import React from 'react';
import './input.css';

const InputText = ({ name, placeholder, type }) => (
  <div className="field-wrap">
    <input type={type} placeholder={placeholder} name={name} />
  </div>
);

InputText.defaultProps = {
  type: 'text',
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default InputText;
