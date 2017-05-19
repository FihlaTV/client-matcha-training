import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sass/home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Mainform">
          <ul className="Navheaderbar">
            <li className="Navheaderbrand active"><Link to="/login">Sign Up</Link></li>
            <li className="Navheaderbrand"><Link to="/login">Log In</Link></li>
          </ul>
          <div clasName="Signup">
            <h1>Sign Up</h1>

            <form action="/" method="post">
              <div className="top-row">
                <div className="field-wrap">
                  <input type="text" required autoComplete="off" placeholder="First Name" />
                </div>
                <div className="field-wrap">
                  <input type="text" required autoComplete="off" placeholder="Last Name" />
                </div>
              </div>
              <div className="field-wrap">
                <input type="text" required autoComplete="off" placeholder="User Name" />
              </div>
              <div className="field-wrap">
                <input type="text" required autoComplete="off" placeholder="Password" />
              </div>
              <div className="field-wrap">
                <input type="text" required autoComplete="off" placeholder="Repeat Password" />
              </div>
                <button type="submit" className="button button-block">Get Started</button>
            </form>
          </div>
          <div className="Login">
            <h1>Log In</h1>
              <form action="/" method="post">
            <div className="field-wrap">
              <input type="text" required autoComplete="off" placeholder="User Name" />
            </div>
            <div className="field-wrap">
              <input type="text" required autoComplete="off" placeholder="Password" />
            </div>
            <button type="submit" className="button button-block">Log In</button>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
