import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './selectbox.css';
import countries from './countries';

class SelectBox extends Component {
  state = {
    labelName: `Choose your ${this.props.name}`,
  };

  componentWillMount() {
    // console.log(this.state);
  }

  handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ labelName: value });
    // console.log('handleChange', this.state);
  };
  render() {
    const { labelName } = this.state;
    const { name } = this.props;
    return (
      <div className="select-box">
        <label htmlFor="select-box1" className="label select-box1">
          <span className="label-desc">{labelName}</span>
        </label>
        <select name={name} id="select-box1" className="select" onChange={this.handleChange}>
          {countries.map(({ name }) => <option key={name} name={name}>{name}</option>)}
        </select>
      </div>
    );
  }
}
SelectBox.propTypes = {
  name: PropTypes.string.isRequired,
};
export default SelectBox;
