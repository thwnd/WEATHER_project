import React, { createContext, useContext, useReducer } from 'react';

const WeatherContext = createContext();

const initialState = {
  weatherData: null,
  location: { lat: 37.5665, lon: 126.9780 }, // Default to Seoul
  units: 'metric',
};

function weatherReducer(state, action) {
  switch (action.type) {
    case 'SET_WEATHER_DATA':
      return { ...state, weatherData: action.payload };
    case 'SET_LOCATION':
      return { ...state, location: action.payload };
    case 'SET_UNITS':
      return { ...state, units: action.payload };
    default:
      return state;
  }
}

export function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}