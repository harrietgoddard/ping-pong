import { createStore, compose, applyMiddleware } from "redux";
import initial from './initial';
import reducer from './reducer';
import thunk from "redux-thunk";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initial,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;