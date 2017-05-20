import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root';
import Authentication from './components/Authentication';
// import Home from './components/Home';
import './index.scss';

// <Route exact path="/login" component={Login} />
// <Route path="/register" component={Register} />
render((
  <Router>
    <div>
      <Route exact path="/" component={Root} />
      <Route path="/auth" component={Authentication} />
      {/* <Route path="/home" component={Home} /> */}
    </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
