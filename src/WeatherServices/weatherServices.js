
// Weather API_KEY *********************
const API_KEY = '0193da741ae6033db54602e4da72ebfe';

// weather icon function *********************
const getIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

// weather data load function *********************
const getWeatherData = async (city, units = "metric") =>{
    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data)

    // weather data destructuring object**************************
    const {
      weather,
      main: { temp, feels_like, humidity, temp_max, temp_min},
      wind: {speed},
      sys: {country},
      name
    } = data;
    const {description, icon} = weather[0];
    // weather data return in object **************************
    return{
      description,
      iconURL: getIconURL(icon),
      temp,
      feels_like,
      humidity,
      temp_max,
      temp_min,
      speed,
      country,
      name
    }
}

export {getWeatherData}