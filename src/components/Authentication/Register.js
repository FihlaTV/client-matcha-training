import React, { Component } from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router';
import { getRegister } from '../../Api/auth';

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
    const info = _.omit(this.state, ['registerSuccess', 'ErrMsg']);
    getRegister(info).then(({ data }) => {
      if (data.status === 'success') {
        this.setState({ registerSuccess: true });
      } else {
        this.setState({ ErrMsg: data.details });
      }
    });
  };

  render() {
    const { registerSuccess } = this.state;
    return (
      <div className="Signup">
        <h1>Sign Up</h1>
        <form onChange={this.handleChange}>
          <div className="top-row">
            <div className="field-wrap">
              <input type="text" placeholder="First Name" name="firstname" />
            </div>
            <div className="field-wrap">
              <input type="text" placeholder="Last Name" name="lastname" />
            </div>
          </div>
          <div className="field-wrap">
            <input type="text" placeholder="User Name" name="login" />
          </div>
          <div className="field-wrap">
            <input type="email" placeholder="E-Mail" name="email" />
          </div>
          <div className="field-wrap">
            <input type="password" placeholder="Password" name="password" />
          </div>
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

export default Register;
