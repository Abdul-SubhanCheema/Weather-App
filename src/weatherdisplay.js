import React from 'react';
import './App.css'; // Import the CSS file

const WeatherDisplay = ({ weather }) => {
  if (!weather) return <div className="weather-display">No weather data</div>;

  return (
    <div className="weather-display">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>{weather.weather[0].description}</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
