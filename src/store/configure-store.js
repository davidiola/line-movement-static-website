import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import rootReducer from '../reducers';

const middlewares = [
  thunk,
  createLogger(),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      ...rootReducer,
    }),
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
    ),
  );
  return store;
}

