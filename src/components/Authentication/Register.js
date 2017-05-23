import React, { Component } from 'react';
import ErrorMsg from '../ErrorMsg';

class Register extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    repassword: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  register = (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      repassword,
    } = this.state;
    if (password !== repassword)
      ;
  }

  render() {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      repassword,
    } = this.state;
    return (
      <div className="Signup">
        <ErrorMsg msg={this.ErrorMsg} />
        <h1>Sign Up</h1>
        <form>
          <div className="top-row">
            <div className="field-wrap">
              <input
                type="text"
                required
                autoComplete="on"
                placeholder="First Name"
                value={firstname}
                onChange={this.handleChange}
                name="firstname"
              />
            </div>
            <div className="field-wrap">
              <input
                type="text"
                required
                autoComplete="on"
                placeholder="Last Name"
                value={lastname}
                onChange={this.handleChange}
                name="lastname"
              />
            </div>
          </div>
          <div className="field-wrap">
            <input
              type="text"
              required
              autoComplete="on"
              placeholder="User Name"
              value={username}
              onChange={this.handleChange}
              name="username"
            />
          </div>
          <div className="field-wrap">
            <input
              type="email"
              required
              autoComplete="on"
              placeholder="E-Mail"
              value={email}
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <div className="field-wrap">
            <input
              type="password"
              required
              autoComplete="on"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              name="password"
            />
          </div>
          <div className="field-wrap">
            <input
              type="password"
              required
              autoComplete="on"
              placeholder="Repeat Password"
              value={repassword}
              onChange={this.handleChange}
              name="repassword"
            />
          </div>
          <button
            type="submit"
            className="button button-block"
            onClick={this.register}
          >Get Started</button>
        </form>
      </div>
    );
  }
}

export default Register;
