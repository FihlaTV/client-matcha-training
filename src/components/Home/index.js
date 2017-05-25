import React from 'react';
import { Logout } from '../logout';

const Home = () => (

  <div>I am the home component
    <div><button onClick={Logout}>LogOut</button></div>
  </div>
);

export default Home;
