import { useEffect, useState } from 'react';
import { getWeatherData } from '../../WeatherServices/weatherServices';
import hotBg from '../../assets/hot.jpg';
import coldBg from '../../assets/cold.jpg';
import './SearchWeather.css';
import WeatherDescription from './WeatherDescription';

const SearchWeather = () => {

  const [city, setCity] = useState("paris")
  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState("metric")
  const [bg, setBg] = useState("hotBg");

  useEffect(() => {
    const getWeatherAllData = async () => {
      const data = await getWeatherData(city, units);
      setWeather(data);

      // backgroundImage dynamic change
      const threshold = units === "metric" ? 20 : 60;
      if(data.temp <= threshold) setBg(coldBg)
      else setBg(hotBg)
    }
    getWeatherAllData();
  }, [units, city]);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°C" : "°F";
    setUnits(isCelsius ? "metric" : "imperial")
  }

  const enterKeyPress = (e) =>{
    if(e.keyCode === 13){
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }

  return (
    <div className='app' style={{backgroundImage: `url(${bg})`}}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
          <div className="section section_inputs">
          <input onKeyDown={enterKeyPress} type="text" name='city' placeholder="Enter City.."/>
          <button onClick={(e) => handleClick(e)}>°F</button>
          </div>
          <div className="section section_temperature">
          <div className="icon">
            <h2>{`${weather.name}, ${weather.country}`}</h2>
            <img src={`${weather.iconURL}`} alt="WeatherIcon" />
            <h2>{`${weather.description}`}</h2>
          </div>
          <div className="temperature">
            <h1>{`${weather.temp.toFixed()} ${units === "metric" ? "°C" : "°F"}`}</h1>
          </div>
          </div>
            {/* bottom description */}
          <WeatherDescription weather={weather} units={units}/>
        </div>
          )
        }
      </div>
    </div>
  );
};

export default SearchWeather;