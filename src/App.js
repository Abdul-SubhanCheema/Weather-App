import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './weatherform';
import WeatherDisplay from './weatherdisplay';
import './App.css'; // Import the CSS file

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const API_KEY = '544343c612f78cef58112a71fba534e5'; 
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching the weather data', error);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <WeatherForm onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
