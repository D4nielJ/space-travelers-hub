import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  // missions: missionsReducer,
  // rockets: rocketsReducer
});

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;