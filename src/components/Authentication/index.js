import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import '../sass/home.css';

const Authentication = ({ match }) => (
  <div className="Home">
    <div className="Mainform">
      <ul className="Navheaderbar">
        <li className="Navheaderbrand active">
          <NavLink activeClassName="active" to={`${match.path}/register`}>Sign Up</NavLink>
        </li>
        <li className="Navheaderbrand">
          <NavLink activeClassName="active" to={`${match.path}/login`}>Sign In</NavLink>
        </li>
      </ul>
      {console.log(match.path)}
      <Route path={`${match.path}/login`} component={Login} />
      <Route path={`${match.path}/register`} component={Register} />
    </div>
  </div>
);

Authentication.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Authentication;
