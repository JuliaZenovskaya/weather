import { createStore, combineReducers, applyMiddleware } from 'redux';
import geoReducer from './reducers/geoReducer';
import сitiesReducer from './reducers/сitiesReducer';
import thunk from "redux-thunk";

const LOCAL_STORAGE_KEY = 'added_cities';

const reducer = combineReducers({
geolocation : geoReducer,
fav : сitiesReducer,
})

const store = createStore (reducer, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...store.getState().fav.favorites.keys()]));
});

export default store;
