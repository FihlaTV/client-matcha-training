import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import { getResetPassword } from '../../Api/auth';

class ResetPassword extends Component {
  state = {
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  Query = (e) => {
    e.preventDefault();
    console.log(this);
    // const formData = { email: this.state.email };
    // // getResetPassword(formData).then(({ data }) => {
    // //   console.log(data);
    // //   // if (data.status === 'success') {
    // //   //   con
    // //   // } else {
    // //   //   // this.setState({ errmsg: data.details });
    // //   // }
    // });
  };

  render() {
    // if (this.state.isUserLoggedIn === true) return <Redirect to="" />;
    return (
      <div className="Login">
        <h1>Reset Password</h1>
        {/* <form onChange={this.handleChange}>
          <div className="field-wrap">
            <input type="password" placeholder="Password" name="password" />
          </div>
          <input
            type="submit"
            className="button button-block"
            value="Log In"
            onClick={this.Query}
          />
        </form> */}
      </div>
    );
  }
}

export default ResetPassword;
