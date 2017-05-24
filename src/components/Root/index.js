import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { checkAuthentication } from '../../Api/auth';

class Root extends Component {
  state = {
    isUserLoggedIn: null,
  }

  componentWillMount() {
    checkAuthentication()
      .then(({ data }) => {
        console.log('Data from root.js');
        console.log(data);
        if (data.status === 'success') {
          this.setState({ isUserLoggedIn: true });
        } else {
          this.setState({ isUserLoggedIn: false });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { isUserLoggedIn } = this.state;
    if (isUserLoggedIn === false) return (<Redirect to="/auth" />);
    if (isUserLoggedIn === true) return (<Redirect to="/home" />);
    return (<div>Loading...</div>);
  }
}

export default Root;
