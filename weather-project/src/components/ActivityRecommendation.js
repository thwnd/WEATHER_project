import React from 'react';
import styled from 'styled-components';
import { useWeather } from '../contexts/WeatherContext';

const RecommendationCard = styled.div`
  background-color: #e6f7ff;
  border-radius: 10px;
  padding: 20px;
`;

function ActivityRecommendation() {
  const { state } = useWeather();
  const current = state.weatherData?.current;

  if (!current) return null;

  const getRecommendation = (temp, weather) => {
    if (temp > 25) return "It's hot! Consider going for a swim or staying in with air conditioning.";
    if (temp < 10) return "It's chilly. How about a warm indoor activity?";
    if (weather.includes('Rain')) return "It's rainy. Perfect weather for reading a book or watching a movie.";
    return "The weather is nice. Why not go for a walk or have a picnic?";
  };

  const recommendation = getRecommendation(current.main.temp, current.weather[0].main);

  return (
    <RecommendationCard>
      <h2>Activity Recommendation</h2>
      <p>{recommendation}</p>
    </RecommendationCard>
  );
}

export default ActivityRecommendation;