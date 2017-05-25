import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { checkAuthentication } from '../../Api/auth';

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
    const { url } = this.props.location.pathname;
    return (
      <div>
        <div />
        {isUserLoggedIn === false && <Redirect to="/auth" />}
        {isUserLoggedIn === true && <Redirect to={url} />}
      </div>
    );
  }
}

Root.propTypes = {
  location: PropTypes.object.isRequired,
};
export default Root;
