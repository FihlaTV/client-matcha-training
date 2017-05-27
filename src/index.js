import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root';
import RootReducer from './reducers';
import Authentication from './components/Authentication';
import Home from './components/Home';

const store = createStore(
  RootReducer,
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f),
);

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Root} />
        <Route path="/auth" component={Authentication} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
