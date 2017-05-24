import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as Api from '../../Api';

class Root extends Component {
  state = {
    isUserLoggedIn: null,
  }

  componentWillMount() {
    Api.checkAuthentication()
      .then(({ data }) => {
        if (data.status === 'success') {
          this.setState({ isUserLoggedIn: true });
        } else {
          this.setState({ isUserLoggedIn: false });
        }
      });
  }

  render() {
    const { isUserLoggedIn } = this.state;
    if (isUserLoggedIn === false) return (<Redirect to="/auth" />);
    if (isUserLoggedIn === true) return (<Redirect to="/home" />);
    return (<div>Loading...</div>);
  }
}

export default Root;
