import React from 'react';
import { PropTypes } from 'prop-types';
import { Route } from 'react-router-dom';
import AboutYou from './AboutYou';
import { Logout } from '../Authentication/Logout';
import '../sass/home.css';

const Home = ({ match: { path } }) => (
  <div className="Home">
    <div className="Mainform">
      <div><button onClick={Logout}>LogOut</button></div>
      <Route path={`${path}/aboutyou`} component={AboutYou} />
      {/* <Route path={`${path}/resetpassword`} component={} /> */}
    </div>
  </div>
);

Home.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Home;
