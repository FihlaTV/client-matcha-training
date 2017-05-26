import React, { Component } from 'react';
import queryString from 'query-string';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getResetPassword } from '../../CallApi';

class ResetPassword extends Component {
  state = {
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  Query = (e) => {
    e.preventDefault();
    const parsed = queryString.parse(this.props.location.search);
    const form = { password: this.state.password, token: parsed.token };
    getResetPassword(form).then(({ data }) => {
      console.log(data);
      if (data.status === 'success') {
        // this.setState({ registerSuccess: true });
      } else {
        // this.setState({ ErrMsg: data.details });
      }
    });
  };

  render() {
    // if (this.state.isUserLoggedIn === true) return <Redirect to="" />;
    return (
      <div className="Login">
        <h1>Reset Password</h1>
        <form onChange={this.handleChange}>
          <div className="field-wrap">
            <input type="password" placeholder="Password" name="password" />
          </div>
          <input
            type="submit"
            className="button button-block"
            value="Log In"
            onClick={this.Query}
          />
        </form>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  location: PropTypes.object.isRequired,
};
export default ResetPassword;
