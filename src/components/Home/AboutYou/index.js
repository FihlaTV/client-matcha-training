import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActions from '../../../actions';
import UploadImage from './UploadImage';
import Bio from './Bio';
import Sex from './Sex';
import '../../sass/home.css';

class AboutYou extends Component {
  state = {
    sexe: '',
    menu: 1,
    bio: '',
    img: '',
    tags: [],
    orientation: '',
  };

  handleChange = ({ target: { name, value } }) => {
    if (value.match(/^Choose/)) this.setState({ [name]: '' });
    else if (name !== 'tags') this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  Query = (evt) => {
    evt.preventDefault();
  };
  handleCheck = ({ target: { value, name }, keyCode }) => {
    if (name === 'tags' && keyCode === 13 && !value.match(/^\s*$/)) {
      const { tags } = this.state;
      console.log(value);
      this.state.tags.push(value);
    }
  };
  render() {
    const { menu } = this.state;
    console.log(this.state);
    return (
      <div className="Login">
        <form onChange={this.handleChange} onKeyUp={this.handleCheck} onSubmit={this.handleSubmit}>
          {menu === 1 && <Sex />}
          {menu === 2 && <Bio />}
          {menu === 3 && <UploadImage />}
        </form>
        <ul className="Navheaderbar">
          <li className="Navheaderbrand">
            {menu !== 1 &&
              <a className="Navheaderbar active" onClick={() => this.setState({ menu: menu - 1 })}>
                Previous
              </a>}
          </li>
          <li className="Navheaderbrand">
            {menu !== 3 &&
              <a className="Navheaderbar active" onClick={() => this.setState({ menu: menu + 1 })}>
                Next
              </a>}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ flashMessage }) => ({
  flashMessage,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    flashMessage: bindActionCreators(allActions.flashMessage, dispatch),
  },
});

AboutYou.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutYou);
