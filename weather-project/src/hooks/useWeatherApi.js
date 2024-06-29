import { useEffect, useState } from 'react';
import { useWeather } from '../contexts/WeatherContext';
import { getCurrentWeather, getForecast } from '../services/weatherService';

export function useWeatherApi() {
  const { state, dispatch } = useWeather();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        setLoading(true);
        const [currentWeather, forecast] = await Promise.all([
          getCurrentWeather(state.location.lat, state.location.lon, state.units),
          getForecast(state.location.lat, state.location.lon, state.units)
        ]);
        dispatch({ type: 'SET_WEATHER_DATA', payload: { current: currentWeather, forecast } });
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeatherData();
  }, [state.location, state.units, dispatch]);

  return { loading, error };
}