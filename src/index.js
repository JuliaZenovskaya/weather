import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import geoReducer from './reducers/GeoReducer';
import citiesReducer from './reducers/CitiesReducer';

const weatherStore = createStore (combineReducers({
geo : geoReducer,
cities : citiesReducer,
}), applyMiddleware(thunk));

weatherStore.subscribe(() => {
  localStorage.setItem('cities', JSON.stringify([...weatherStore.getState().cities.cities.keys()]));
});

ReactDOM.render(
<Provider store = {weatherStore}>
  <App />
  </Provider>, document.getElementById('root'));


export default function getCitiesFromStorage(key = 'cities') {
  let cities = [];
  const localStorageContent = JSON.parse(localStorage.getItem(key));
  if (localStorageContent !== null && Array.isArray(localStorageContent))
  cities = localStorageContent;
  return new Map(cities.map(cityName => [cityName]));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
