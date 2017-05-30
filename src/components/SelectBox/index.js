import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './selectbox.css';

class SelectBox extends Component {
  state = {
    labelName: `Choose your ${this.props.name}`,
    FirstSelect: '',
  };

  componentWillMount() {
    const { labelName } = this.state;
    this.setState({ FirstSelect: labelName });
    // this.setState({ [name]: select[0] });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ labelName: value });
  };
  render() {
    const { labelName, FirstSelect } = this.state;
    const { name, select } = this.props;
    return (
      <div className="select-box">
        <label htmlFor="select-box1" className="label select-box1">
          <span className="label-desc">{labelName}</span>
        </label>
        <select name={name} id="select-box1" className="select" onChange={this.handleChange}>
          <option key={FirstSelect} name={FirstSelect}>{FirstSelect}</option>
          {select.map(val => <option key={val} name={val}>{val}</option>)}
        </select>
      </div>
    );
  }
}
SelectBox.propTypes = {
  name: PropTypes.string.isRequired,
  select: PropTypes.array.isRequired,
};
export default SelectBox;
