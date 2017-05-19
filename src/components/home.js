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
            <div class="top-row">
          <div class="field-wrap">
            <label>
              First Name<span class="req">*</span>
            </label>
            <input type="text" required autocomplete="off" />
          </div>

          <div class="field-wrap">
            <label>
              Last Name<span class="req">*</span>
            </label>
            <input type="text"required autocomplete="off"/>
          </div>
        </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
