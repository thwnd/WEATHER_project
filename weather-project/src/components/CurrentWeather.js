import React from 'react';
import { useWeather } from '../contexts/WeatherContext';
import { useWeatherApi } from '../hooks/useWeatherApi';

const CurrentWeather = () => {
  const { state } = useWeather();
  const { weatherData, loading, error } = useWeatherApi(state.location.lat, state.location.lon);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!weatherData) return null;

  const { temp, description } = weatherData.current.main;

  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <p>Temperature: {temp}°C</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default CurrentWeather;