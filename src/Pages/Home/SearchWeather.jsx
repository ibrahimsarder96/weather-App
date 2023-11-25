import { useEffect } from 'react';
import { getWeatherData } from '../../WeatherServices/weatherServices';
import hotBg from '../../assets/hot.jpg';
import coldBg from '../../assets/cold.jpg';
import './SearchWeather.css';
import Description from './Description';
const SearchWeather = () => {
  useEffect(() => {
    const getWeatherAllData = async () => {
      const data = await getWeatherData("india");
      console.log(data)
    }
    getWeatherAllData();
  }, []);
  return (
    <div className='app' style={{backgroundImage: `url(${hotBg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section_inputs">
          <input type="text" name='city' placeholder="Enter City.."/>
          <button>°F</button>
          </div>
          <div className="section section_temperature">
          <div className="icon">
            <h2>Dhaka, BG</h2>
            <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="WeatherIcon" />
            <h2>Cloudy</h2>
          </div>
          <div className="temperature">
            <h1>32 °C</h1>
          </div>
          </div>
            {/* bottom description */}
          <Description/>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;