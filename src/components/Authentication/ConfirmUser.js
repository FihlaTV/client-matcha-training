import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router';
import _ from 'lodash';
import { confirmUser } from '../../Api/auth';

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
    console.log(info);
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
          <div className="field-wrap">
            <input type="text" placeholder="User Name" name="login" />
          </div>
          <div className="field-wrap">
            <input type="text" name="token" placeholder="Enter the Code" />
          </div>
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
