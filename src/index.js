import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import geoReducer from './reducers/GeoReducer';
import favReducer from './reducers/FavReducer';

const weatherStore = createStore (combineReducers({
geo : geoReducer,
fav : favReducer,
}), applyMiddleware(thunk));



ReactDOM.render(
<Provider store = {weatherStore}>
  <App />
  </Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
