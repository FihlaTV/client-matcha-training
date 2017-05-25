import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ErrorMsg, SuccessMsg } from '../Msg';
import { getLogin, setAuthorizationToken } from '../../Api/auth';

class Login extends Component {
  state = {
    errmsg: '',
    login: '',
    password: '',
    isUserLoggedIn: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  QueryLogin = (evt) => {
    evt.preventDefault();
    const { login, password } = this.state;
    if (!/^[A-Za-z ]{2,30}$/.test(login)) {
      return this.setState({ errmsg: 'Wrong Login Format' });
    }
    if (!password) {
      return this.setState({ errmsg: 'Password is empty' });
    }
    const formData = { login, password };
    getLogin(formData).then(({ data }) => {
      if (data.status === 'success') {
        const token = data.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        this.setState({ isUserLoggedIn: true });
      } else {
        this.setState({ errmsg: data.details });
      }
    });
  };
  render() {
    const { errmsg } = this.state;
    let successmsg;
    if (this.props.location.state) {
      successmsg = this.props.location.state.msg;
    }
    if (this.state.isUserLoggedIn === true) return <Redirect to="" />;
    return (
      <div className="Login">
        {successmsg && <SuccessMsg msg={successmsg} />}
        {errmsg && <ErrorMsg msg={errmsg} />}
        <h1>Log In</h1>
        <form onChange={this.handleChange}>
          <div className="field-wrap">
            <input type="text" placeholder="User Name" name="login" />
          </div>
          <div className="field-wrap">
            <input type="password" required placeholder="Password" name="password" />
          </div>
          <input
            type="submit"
            className="button button-block"
            value="Log In"
            onClick={this.QueryLogin}
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Login;
