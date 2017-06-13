import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { checkAuthentication } from '../../CallApi';

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
    // console.log(pathname);
    return (
      <div>
        {isUserLoggedIn === false &&
          pathname.match(/^\/auth\/?/) === null &&
          <Redirect to="/auth" />}
        {isUserLoggedIn === true &&
          pathname.match(/^\/auth\/?/) !== null &&
          <Redirect to="/home/aboutyou" />}
      </div>
    );
  }
}

Root.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Root;
