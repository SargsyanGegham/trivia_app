import { combineReducers } from 'redux';
import AppReducer from './AppReducer';

const reducers = combineReducers({
  appStore: AppReducer,
});

export default reducers;