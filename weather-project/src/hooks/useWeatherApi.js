import { useState, useEffect } from 'react';
import { getCurrentWeather, getForecast } from '../services/weatherService';

export const useWeatherApi = (lat, lon) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [currentWeather, forecast] = await Promise.all([
          getCurrentWeather(lat, lon),
          getForecast(lat, lon)
        ]);
        setWeatherData({ current: currentWeather.data, forecast: forecast.data });
        // 로컬 스토리지에 데이터 캐싱
        localStorage.setItem('weatherData', JSON.stringify({
          data: { current: currentWeather.data, forecast: forecast.data },
          timestamp: Date.now()
        }));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const cachedData = JSON.parse(localStorage.getItem('weatherData'));
    if (cachedData && Date.now() - cachedData.timestamp < 30 * 60 * 1000) { // 30분 캐시
      setWeatherData(cachedData.data);
      setLoading(false);
    } else {
      fetchData();
    }
  }, [lat, lon]);

  return { weatherData, loading, error };
};