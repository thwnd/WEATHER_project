import React from 'react';
import { WeatherProvider } from './contexts/WeatherContext';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import WeatherMap from './components/WeatherMap';
import ActivityRecommendation from './components/ActivityRecommendation';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Header />
        <CurrentWeather />
        <Forecast />
        <WeatherMap />
        <ActivityRecommendation />
      </div>
    </WeatherProvider>
  );
}

export default App;