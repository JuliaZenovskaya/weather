import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const store = configureMockStore([thunk]);
const response = {
    "coord":{"lon":37.62,"lat":55.75},
    "weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"}],
    "base":"stations",
    "main":{"temp":4.38,"pressure":1015,"humidity":100,"temp_min":2,"temp_max":5.56},
    "visibility":3000,
    "wind":{"speed":4,"deg":90},
    "clouds":{"all":90},
    "dt":1573170827,
    "sys":{"type":1,"id":9027,"country":"RU","sunrise":1573188558,"sunset":1573220232},
    "timezone":10800,
    "id":524901,
    "name":"Moscow",
    "cod":200
  };
describe("Weather in displaying", () => {
  it("Weather exists and is not loading", () => {
    const tempStore = store({
      geo: {
            weather: response,
            isloading: false
        }
    });

    const htmlTree = renderer.create(
      <Provider store={store}>
        <AddedCities
          setCoords={()=> {}}
          setTrue={()=> {}}
          getWeatherByCoords={()=> {}}
          getErrorResponse={()=> {}}/>
     </Provider>).toJSON();
    expect(htmlTree).toMatchSnapshot();
  });

  it("Weather exists but is loading", () => {
    const tempStore = store({
      geo: {
            weather: response,
            isloading: true
        }
    });

    const htmlTree = renderer.create(
      <Provider store={store}>
        <AddedCities
          setCoords={()=> {}}
          setTrue={()=> {}}
          getWeatherByCoords={()=> {}}
          getErrorResponse={()=> {}}/>
     </Provider>).toJSON();
    expect(htmlTree).toMatchSnapshot();
  });
  });

  it("Weather is not exists and is loading", () => {
    const tempStore = store({
      geo: {
            isloading: true
        }
    });

    const htmlTree = renderer.create(
      <Provider store={store}>
        <AddedCities
          setCoords={()=> {}}
          setTrue={()=> {}}
          getWeatherByCoords={()=> {}}
          getErrorResponse={()=> {}}/>
     </Provider>).toJSON();
    expect(htmlTree).toMatchSnapshot();
  });
  });

  it("Some error with displaying weather", () => {
    const tempStore = store({
      geo: {
            error: 'error'
        }
    });

    const htmlTree = renderer.create(
      <Provider store={store}>
        <AddedCities
          setCoords={()=> {}}
          setTrue={()=> {}}
          getWeatherByCoords={()=> {}}
          getErrorResponse={()=> {}}/>
     </Provider>).toJSON();
    expect(htmlTree).toMatchSnapshot();
  });
  });
});
