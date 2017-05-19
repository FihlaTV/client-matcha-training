import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/home';
import Login from './components/auth/login';
import Register from './components/auth/register';
import './index.css';

render((
  <Router>
    <div>
      <Route path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
), document.getElementById('root'));﻿
registerServiceWorker();
