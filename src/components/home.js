import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sass/home.sass';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      Hello
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Home;
