import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { checkAuthentication } from '../../CallApi';
import { ErrorMsg, SuccessMsg } from '../Flash';

class Root extends Component {
  state = {
    isUserLoggedIn: null,
  };

  componentWillMount() {
    checkAuthentication()
      .then(({ data }) => {
        if (data.status === 'success') {
          this.setState({ isUserLoggedIn: true });
        } else {
          this.setState({ isUserLoggedIn: false });
        }
      })
      .catch(err => err);
  }

  render() {
    const { isUserLoggedIn } = this.state;
    const { pathname } = this.props.location;
    return (
      <div>
        <ErrorMsg msg="d" />
        <SuccessMsg msg="d" />
        {isUserLoggedIn === false &&
          pathname.match(/^\/auth\/?/) === null &&
          <Redirect to="/auth" />}
        {isUserLoggedIn === true && <Redirect to="/home" />}
      </div>
    );
  }
}

Root.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Root;
