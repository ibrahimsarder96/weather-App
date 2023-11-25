import { useEffect } from 'react';
import { getWeatherData } from '../../WeatherServices/weatherServices';

const SearchWeather = () => {
  useEffect(() => {
    const getWeatherAllData = async () => {
      const data = await getWeatherData("india");
      console.log(data)
    }
    getWeatherAllData();
  }, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default SearchWeather;