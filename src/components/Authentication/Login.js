import React, { Component } from 'react';
import { ErrorMsg } from '../Msg';
import { getLogin } from '../../Api';

class Login extends Component {
  state = {
    errmsg: '',
    login: '',
    password: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  QueryLogin = (evt) => {
    evt.preventDefault();
    const {
      login,
      password,
    } = this.state;
    if (!/^[A-Za-z ]{2,30}$/.test(login)) {
      return (this.setState({ errmsg: 'Wrong Login Format' }));
    }
    if (!password) {
      return (this.setState({ errmsg: 'Password is empty' }));
    }
    const info = { ...this.state };
    delete info.errmsg;
    getLogin(info)
      .then(({ data }) => {
        console.log(data);
        if (data.status === 'success') {
          console.log('success');
        } else {
          console.log('failed');
        }
      });
  }
  render() {
    const {
      errmsg,
    } = this.state;
    return (
      <div className="Login">
        {errmsg && <ErrorMsg msg={errmsg} /> }
        <h1>Log In</h1>
        <form onChange={this.handleChange}>
          <div className="field-wrap">
            <input
              type="text"
              placeholder="User Name"
              name="login"
            />
          </div>
          <div className="field-wrap">
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
            />
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


export default Login;
