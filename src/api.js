import axios from 'axios';

const API_KEY = 'fe638ca057fd9aed77e5d35ff840adcf';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
// const BACKEND_URL = 'http://localhost:8080';

export const fetchWeather = async (city) => {
    const { data } = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return data;
};

export const fetchForecast = async (city) => {
    const { data } = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    return data;
};

// export const fetchWeatherFromBackend = async (city) => {
//     const { data } = await axios.get(`http://localhost:8080/weather/${city}`);
//     return JSON.parse(data);
// };

// export const fetchForecastFromBackend = async (city) => {
//     const { data } = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
//     return data;
// };
