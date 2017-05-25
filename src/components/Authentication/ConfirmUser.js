import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router';
import _ from 'lodash';
import { InputText } from '../InputText';
import { confirmUser } from '../../CallApi';

class ConfirmUser extends Component {
  state = {
    Confirmed: false,
    login: '',
    token: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  Query = (e) => {
    e.preventDefault();
    const info = _.pick(this.state, ['login', 'token']);
    confirmUser(info).then(({ data }) => {
      if (data.status === 'success') {
        this.setState({ Confirmed: true });
      } else {
        // this.setState({ ErrMsg: data.details });
      }
    });
  };

  render() {
    const { Confirmed } = this.state;
    return (
      <div className="Login">
        <h1>Confirm User</h1>
        <form onChange={this.handleChange}>
          <InputText placeholder="User Name" name="login" />
          <InputText placeholder="Enter the Code" name="token" />
          <button type="submit" className="button button-block" onClick={this.Query}>
            Send
          </button>
        </form>
        {Confirmed &&
          <Redirect
            to={{
              pathname: 'login',
              state: { ...Confirmed, msg: 'Successfully Confirmed - You can now Login' },
            }}
          />}
      </div>
    );
  }
}

ConfirmUser.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ConfirmUser;
