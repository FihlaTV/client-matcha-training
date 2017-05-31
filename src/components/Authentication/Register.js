import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { Redirect } from 'react-router';
import allActions from '../../actions';
import Ui from '../../ui';
import { getRegister } from '../../CallApi/';

class Register extends Component {
  state = {
    registerSuccess: false,
    firstname: '',
    lastname: '',
    login: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  Query = (e) => {
    e.preventDefault();
    let info = _.omit(this.state, ['registerSuccess', 'ErrMsg']);
    const { create } = this.props.actions.flashMessage;
    axios.get('https://api.ipify.org/').then((response) => {
      info = { ...info, ip: response.data };
      getRegister(info).then(({ data }) => {
        if (data.status === 'success') {
          this.setState({ registerSuccess: true });
        } else {
          create({ type: 'err', details: data.details });
        }
      });
    });
  };

  render() {
    const { registerSuccess } = this.state;
    return (
      <div className="Signup">
        <h1>Sign Up</h1>
        <form onChange={this.handleChange}>
          <div className="top-row">
            <Ui.InputText placeholder="Last Name" name="lastname" />
            <Ui.InputText placeholder="First Name" name="firstname" />
          </div>
          <Ui.InputText placeholder="User Name" name="login" />
          <Ui.InputText type="email" placeholder="E-mail" name="email" />
          <Ui.InputText type="password" placeholder="Password" name="password" />
          <input
            type="submit"
            className="button button-block"
            onClick={this.Query}
            value="Get Started"
          />
        </form>
        {registerSuccess &&
          <Redirect
            to={{
              pathname: 'confirmuser',
              state: {
                ...registerSuccess,
                msg: 'Successfully Registered - Need to check your mailbox for confirmation',
              },
            }}
          />}
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

Register.propTypes = {
  actions: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
