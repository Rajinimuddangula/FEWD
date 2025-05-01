import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '2d874a1aea7e1753f7362ca2fcaf91ed';

  const getWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name.');
      setWeather(null);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&units=metric&appid=${API_KEY}`
      );

      setWeather(response.data);
      setError('');
    } catch (err) {
        console.log(err.response?.data || err.message); // helpful output
        setError(err.response?.data?.message || 'City not found.');
        setWeather(null);
      }      
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto mt-6 space-y-4">
      <h2 className="text-xl font-bold text-center">Weather Checker</h2>
      <input
        type="text"
        className="w-full border px-3 py-2 rounded"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        onClick={getWeather}
      >
        Get Weather
      </button>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {weather && (
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">{weather.name}</h3>
          <p>
            {weather.weather[0].main} - {weather.weather[0].description}
          </p>
          <p className="text-3xl font-bold">{weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
