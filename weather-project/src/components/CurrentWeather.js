import React from 'react';
import styled from 'styled-components';
import { useWeather } from '../contexts/WeatherContext';
import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';

const WeatherCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const WeatherIcon = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;

function CurrentWeather() {
  const { state } = useWeather();
  const current = state.weatherData?.current;

  if (!current) return <div>Loading...</div>;

  return (
    <WeatherCard>
      <h2>Current Weather</h2>
      <WeatherInfo>
        <WeatherIcon><WiThermometer /></WeatherIcon>
        Temperature: {current.main.temp}°{state.units === 'metric' ? 'C' : 'F'}
      </WeatherInfo>
      <WeatherInfo>
        <WeatherIcon><WiHumidity /></WeatherIcon>
        Humidity: {current.main.humidity}%
      </WeatherInfo>
      <WeatherInfo>
        <WeatherIcon><WiStrongWind /></WeatherIcon>
        Wind Speed: {current.wind.speed} {state.units === 'metric' ? 'm/s' : 'mph'}
      </WeatherInfo>
    </WeatherCard>
  );
}

export default CurrentWeather;