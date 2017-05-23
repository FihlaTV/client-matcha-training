import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ErrorMsg from '../ErrorMsg';
// import '../sass/home.css';
// const Regis = <Register myProp={myProp} {...defaultProps} />
const Regis = <Register ErrorMsg='d' />

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
      <Route path={`${match.path}/login`} component={Login} />
      <Route path={`${match.path}/register`} component={Regis} />
    </div>
  </div>
);

Authentication.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Authentication;
