import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { InputText } from '../InputText';
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
    const info = _.omit(this.state, ['registerSuccess', 'ErrMsg']);
    getRegister(info).then(({ data }) => {
      console.log(data);
      if (data.status === 'success') {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You signed up succesfully. Welcome!',
        });
        // this.setState({ registerSuccess: true });
      } else {
        // this.setState({ ErrMsg: data.details });
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
            <InputText placeholder="Last Name" name="lastname" />
            <InputText placeholder="First Name" name="firstname" />
          </div>
          <InputText placeholder="User Name" name="login" />
          <InputText type="email" placeholder="E-mail" name="email" />
          <InputText type="password" placeholder="Password" name="password" />
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
Register.propTypes = {
  addFlashMessage: PropTypes.PropTypes.func.isRequired,
};
export default Register;
