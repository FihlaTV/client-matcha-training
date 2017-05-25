import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root';
import { setAuthorizationToken } from './Api/auth';
import Authentication from './components/Authentication';
import Home from './components/Home';

setAuthorizationToken(localStorage.jwtToken);
console.log(localStorage);
render((
  <Router>
    <div>
      <Route path="/" component={Root} />
      <Route path="/auth" component={Authentication} />
      <Route path="/home" component={Home} />
    </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
