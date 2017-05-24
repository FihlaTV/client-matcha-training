import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { ErrorMsg } from '../Msg';
import { getRegister } from '../../Api/auth';

class Register extends Component {
  state = {
    registerSuccess: false,
    firstname: '',
    lastname: '',
    login: '',
    email: '',
    password: '',
    ErrMsg: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  register = (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      login,
      email,
      password,
    } = this.state;
    if (!(login || firstname || lastname || email || password )) { return (this.setState({ ErrMsg: 'The form should not contians empty value' })); }
    if (login === password) { return (this.setState({ ErrMsg: 'Username and Password should be different' })); }
    const info = { ...this.state };
    delete info.ErrMsg;
    delete info.registerSuccess;
    getRegister( info )
    .then(({ data }) => {
      if (data.status === 'success') {
        this.setState({ registerSuccess: true });
      } else {
        this.setState({ ErrMsg: data.details });
      }
    });
  }

  render() {
    const {
      registerSuccess,
      ErrMsg,
    } = this.state;
    return (
      <div className="Signup">
        {ErrMsg && <ErrorMsg msg={ErrMsg} />}
        <h1>Sign Up</h1>
        <form onChange={this.handleChange}>
          <div className="top-row">
            <div className="field-wrap">
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
              />
            </div>
            <div className="field-wrap">
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
              />
            </div>
          </div>
          <div className="field-wrap">
            <input
              type="text"
              placeholder="User Name"
              name="login"
            />
          </div>
          <div className="field-wrap">
            <input
              type="email"
              placeholder="E-Mail"
              name="email"
            />
          </div>
          <div className="field-wrap">
            <input
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <input
            type="submit"
            className="button button-block"
            onClick={this.register}
            value="Get Started"
          />
        </form>
        { registerSuccess && <Redirect to={{
          pathname: 'confirmuser',
          state: { ...registerSuccess, msg: 'Successfully Registered - Need to check your mailbox for confirmation' } }}
        /> }
      </div>
    );
  }
}

export default Register;
