import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActions from '../../../actions';
import SelectBox from '../../SelectBox';
import InputText from '../../InputText';
import '../../sass/home.css';

class AboutYou extends Component {
  state = {
    sexe: '',
    menu: 0,
    bio: '',
    orientation: '',
  };

  handleChange = ({ target: { name, value } }) => {
    console.log('HandleChange = ', name, value);
    if (value.match(/^Choose/)) this.setState({ [name]: '' });
    else this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  Query = (evt) => {
    evt.preventDefault();
  };

  render() {
    console.log('Render ', this.state);
    const { menu } = this.state;
    console.log(this.props);
    return (
      <div className="Login">
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          {menu === 0 &&
            <div>
              <SelectBox name="sexe" select={['Male', 'Female']} />
              <SelectBox name="orientation" select={['Bisexual', 'Homosexual', 'Heterosexual']} />
            </div>}
          {menu === 1 &&
            <div>
              <InputText name="bio" placeholder="Type Your Bio Here - Max 2000 characteres" />
              <InputText name="Tags" placeholder="Tags" />
            </div>}
          {menu === 2 && <InputText name="img" placeholder="Imf" />}
        </form>
        <ul className="Navheaderbar">
          <li className="Navheaderbrand">
            <a className="Navheaderbar active" onClick={() => this.setState({ menu: menu - 1 })}>
              Previous
            </a>
          </li>
          <li className="Navheaderbrand">
            <a className="Navheaderbar active" onClick={() => this.setState({ menu: menu + 1 })}>
              Next
            </a>
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
