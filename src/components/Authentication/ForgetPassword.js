import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { InputText } from '../InputText';
import { getForgetPassword } from '../../CallApi';

class ForgetPassword extends Component {
  state = {
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  Query = (e) => {
    e.preventDefault();
    const formData = { email: this.state.email };
    getForgetPassword(formData).then(({ data }) => {
      console.log(data);
      // if (data.status === 'success') {
      //   con
      // } else {
      //   // this.setState({ errmsg: data.details });
      // }
    });
  };

  render() {
    if (this.state.isUserLoggedIn === true) return <Redirect to="" />;
    return (
      <div className="Login">
        <h1>Forget Password</h1>
        <form onChange={this.handleChange}>
          <InputText type="email" placeholder="E-Mail" name="email" />
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

export default ForgetPassword;
