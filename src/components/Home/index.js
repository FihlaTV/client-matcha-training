import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import { Logout } from '../Authentication/Logout';
import '../sass/home.css';

const Home = ({ match: { path } }) => (
  <div className="Home">
    <div className="Mainform">
      <div><button onClick={Logout}>LogOut</button></div>
      {/* <Route path={`${path}/resetpassword`} component={} /> */}
    </div>
  </div>
);

Home.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Home;
