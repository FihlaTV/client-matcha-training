import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ConfirmUser from './ConfirmUser';
import ForgetPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import '../sass/home.css';

const Authentication = ({ match: { path } }) => (
  <div className="Home">
    <div className="Mainform">
      <ul className="Navheaderbar">
        <li className="Navheaderbrand active">
          <NavLink activeClassName="active" to={`${path}/register`}>Sign Up</NavLink>
        </li>
        <li className="Navheaderbrand">
          <NavLink activeClassName="active" to={`${path}/login`}>Sign In</NavLink>
        </li>
      </ul>
      <Route path={`${path}/login`} component={Login} />
      <Route path={`${path}/register`} component={Register} />
      <Route path={`${path}/confirmuser`} component={ConfirmUser} />
      <Route path={`${path}/forgetpassword`} component={ForgetPassword} />
      <Route path={`${path}/resetpassword`} component={ResetPassword} />
    </div>
  </div>
);

Authentication.propTypes = {
  match: PropTypes.object.isRequired,
};
export default Authentication;
