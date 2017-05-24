import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { PropTypes } from 'prop-types';
import { ErrorMsg, SuccessMsg } from '../Msg';
import { confirmUser } from '../../Api';

class ConfirmUser extends Component{
  state = {
    Confirmed: false,
    login: '',
    token: '',
    ErrMsg: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  QueryConfirmUser = (e) => {
    e.preventDefault();
    const info = { ...this.state };
    delete info.ErrMsg;
    delete info.Confirmed;
    console.log(info);
    confirmUser(info)
    .then(({ data }) => {
      if (data.status === 'success') {
        this.setState({ Confirmed: true })
      } else {
        this.setState({ ErrMsg: data.details });
      }
    })
  }

  render() {
    const { ErrMsg, Confirmed } = this.state;
    let successmsg;
    if (this.props.location.state) { successmsg = this.props.location.state.msg; }
    return (
      <div className="Login">
        { successmsg && <SuccessMsg msg={successmsg} />}
        { ErrMsg && <ErrorMsg msg={ErrMsg} />}
        <h1>Confirm User</h1>
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
              type="text"
              name="token"
              placeholder="Enter the Code"
            />
          </div>
          <button type="submit" className="button button-block" onClick={this.QueryConfirmUser}>Send</button>
        </form>
        {Confirmed && <Redirect to={{ pathname: 'login', state: { ...Confirmed, msg: 'Successfully Confirmed - You can now Login' } }} /> }
      </div>
    );
  }
}

ConfirmUser.propTypes = {
  location: PropTypes.object.isRequired,
};
export default ConfirmUser;
