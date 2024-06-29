import React from 'react';
import styled from 'styled-components';
import { useWeather } from '../contexts/WeatherContext';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const UnitToggle = styled.button`
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Header() {
  const { state, dispatch } = useWeather();

  const toggleUnits = () => {
    const newUnits = state.units === 'metric' ? 'imperial' : 'metric';
    dispatch({ type: 'SET_UNITS', payload: newUnits });
  };

  return (
    <HeaderContainer>
      <Title>Weather Dashboard</Title>
      <UnitToggle onClick={toggleUnits}>
        {state.units === 'metric' ? '°C' : '°F'}
      </UnitToggle>
    </HeaderContainer>
  );
}

export default Header;