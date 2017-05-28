import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const initialState = {
  flashMessage: {
    details: '',
    type: '',
  },
};

const generateStore = () => createStore(rootReducer, initialState, applyMiddleware(logger));

export default generateStore;
