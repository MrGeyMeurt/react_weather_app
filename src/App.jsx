import React, {useState} from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null); //stocker les données météos
  const [city, setCity] = useState(''); //stocker la ville choisie

  const handleSearch = (city) => {
    //appel du formulaire par le user
    setCity(city);
    //récuperer les données météos
  };

  console.log(city); // montrer quelle ville est rechercher
  

  return (
    <div>
      <h1>Weather app</h1>
      <SearchForm onSearch={handleSearch} />
      {weatherData ? (
        <WeatherDisplay weather={weatherData} />
      ) : (
        <p>Enter a city to get the weather!</p>
      )}
    </div>
  );
}

export default App;
