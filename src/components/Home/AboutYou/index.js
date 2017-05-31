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
    orientation: '',
  };

  handleChange = ({ target: { name, value } }) => {
    // console.log('HandleChange = ', name, value);
    if (value.match(/^Choose/)) this.setState({ [name]: '' });
    else this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  Query = (evt) => {
    evt.preventDefault();
  };

  render() {
    const { menu } = this.state;
    return (
      <div className="Login">
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          {menu === 2 && <Sex />}
          {menu === 1 && <Bio />}
          {menu === 3 && <UploadImage />}
          {menu === 4 && <div>dd</div>}
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
