import { createStore, combineReducers, applyMiddleware } from 'redux';
import geoReducer from './reducers/geoReducer';
import сitiesReducer from './reducers/сitiesReducer';
import thunk from "redux-thunk";

const reducer = combineReducers({
geolocation : geoReducer,
fav : сitiesReducer,
})

const store = createStore (reducer, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem('cities', JSON.stringify([...store.getState().fav.favorites.keys()]));
});

export default store;
