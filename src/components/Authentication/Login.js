import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getLogin } from '../../CallApi';
import { InputText } from '../InputText';

class Login extends Component {
  state = {
    login: '',
    password: '',
    isUserLoggedIn: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  Query = (evt) => {
    evt.preventDefault();
    const formData = { login: this.state.login, password: this.state.password };
    getLogin(formData).then(({ data }) => {
      console.log(formData);
      // if (data.status === 'success') {
      //
      // this.setState({ isUserLoggedIn: true });
      // } else {
      // }
    });
  };

  render() {
    if (this.state.isUserLoggedIn === true) return <Redirect to="" />;
    return (
      <div className="Login">
        <h1>Log In</h1>
        <form onChange={this.handleChange}>
          <InputText placeholder="User Name" name="login" />
          <InputText type="password" placeholder="Password" name="password" />
          <input
            type="submit"
            className="button button-block"
            value="Log In"
            onClick={this.Query}
          />
        </form>
        <ul className="Navheaderbar">
          <li className="Navheaderbrand">
            <NavLink activeClassName="active" to={'forgetpassword'}>Reset Password</NavLink>
          </li>
          <li className="Navheaderbrand">
            <NavLink activeClassName="active" to={'confirmuser'}>Confirm User</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

Login.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Login;
