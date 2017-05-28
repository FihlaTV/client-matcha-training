import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import allActions from '../../actions';
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
    const { create } = this.props.actions.flashMessage;
    const formData = { email: this.state.email };
    getForgetPassword(formData).then(({ data }) => {
      if (data.status === 'success') {
        // create();
      } else {
        create({ type: 'err', details: data.details });
      }
    });
  };

  render() {
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

const mapStateToProps = ({ flashMessage }) => ({
  flashMessage,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    flashMessage: bindActionCreators(allActions.flashMessage, dispatch),
  },
});

ForgetPassword.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
