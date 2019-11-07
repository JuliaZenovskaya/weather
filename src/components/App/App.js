import React from 'react';
import './App.css';
import GeolocationBlock from '../GeolocationBlock/GeolocationBlock';
import { getGeo } from './AppContainer';

function App() {
  return (
    <div className="App">
    <GeolocationBlock
            getGeo={getGeo}/>
    </div>
  );
}

export default App;
