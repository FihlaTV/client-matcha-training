import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getForgetPassword } from '../../Api/auth';

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
          <div className="field-wrap">
            <input type="email" placeholder="E-Mail" name="email" />
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

export default ForgetPassword;
