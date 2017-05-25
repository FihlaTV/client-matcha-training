import React from 'react';
import { Logout } from '../Authentication/Logout';

const Home = () => (
  <div>
    I am the home component
    <div><button onClick={Logout}>LogOut</button></div>
  </div>
);

export default Home;
