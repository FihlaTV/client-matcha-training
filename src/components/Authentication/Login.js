import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLogin } from '../../CallApi';
import InputText from '../InputText';
import allActions from '../../actions';

class Login extends Component {
  state = {
    login: '',
    password: '',
    isUserLoggedIn: false,
  };

  componentWillMount = () => {
    if (this.props.location.state) {
      const { create } = this.props.actions.flashMessage;
      const { state: { msg } } = this.props.location;
      create({ type: 'success', details: msg });
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  Query = (evt) => {
    evt.preventDefault();
    const { create } = this.props.actions.flashMessage;
    const formData = { login: this.state.login, password: this.state.password };
    getLogin(formData).then(({ data }) => {
      if (data.status === 'success') {
        this.setState({ isUserLoggedIn: true });
        window.location.reload();
      } else {
        create({ type: 'err', details: data.details });
      }
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

const mapStateToProps = ({ flashMessage }) => ({
  flashMessage,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    flashMessage: bindActionCreators(allActions.flashMessage, dispatch),
  },
});

Login.propTypes = {
  location: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
