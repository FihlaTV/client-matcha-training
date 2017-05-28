import { combineReducers } from 'redux';
import flashMessage from './flashMessage';

const rootReducer = combineReducers({
  flashMessage,
});

export default rootReducer;
