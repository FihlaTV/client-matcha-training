import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Root from './components/Root';
import Authentication from './components/Authentication';
import Home from './components/Home';
import allActions from './actions';
import { ErrorMsg } from './components/Flash';

class App extends Component {
  state = {};

  render() {
    const { details, type } = this.props.flashMessage;
    const { flashMessage: { remove } } = this.props.actions;
    return (
      <Router>
        <div>
          {details && <ErrorMsg msg={details} type={type} remove={remove} />}
          <Route path="/" component={Root} />
          <Route path="/auth" component={Authentication} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ flashMessage }) => ({
  flashMessage,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    flashMessage: bindActionCreators(allActions.flashMessage, dispatch),
  },
});

App.propTypes = {
  actions: PropTypes.object.isRequired,
  flashMessage: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
