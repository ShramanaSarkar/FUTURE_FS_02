import React, { useState } from "react";
import { Container, Paper, Box } from "@mui/material";
import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import FavoritesList from "./components/FavoritesList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { fetchWeather, fetchForecast } from "./api";

const App = () => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [favorites, setFavorites] = useState([]);

    const handleSearch = async (city) => {
        const weatherData = await fetchWeather(city);
        const forecastData = await fetchForecast(city);

        const dailyForecast = [];
        const uniqueDates = new Set();
        for (const item of forecastData.list) {
            const date = new Date(item.dt * 1000).toLocaleDateString();
            if (!uniqueDates.has(date)) {
                uniqueDates.add(date);
                dailyForecast.push({
                    date,
                    temp: item.main.temp,
                    condition: item.weather[0].description,
                    icon: item.weather[0].icon,
                });

                if (dailyForecast.length === 5) break;
            }
        }

        setWeather(weatherData);
        setForecast(dailyForecast);
    };

    const addFavorite = (city) => {
        if (!favorites.includes(city)) {
            setFavorites([...favorites, city]);
        }
    };

    const handleFavoriteClick = async (city) => {
        const weatherData = await fetchWeather(city);
        const forecastData = await fetchForecast(city);

        // Process forecast to get only 5 distinct days
        const dailyForecast = [];
        const uniqueDates = new Set();
        for (const item of forecastData.list) {
            const date = new Date(item.dt * 1000).toLocaleDateString();
            if (!uniqueDates.has(date)) {
                uniqueDates.add(date);
                dailyForecast.push({
                    date,
                    temp: item.main.temp,
                    condition: item.weather[0].description,
                    icon: item.weather[0].icon,
                });

                if (dailyForecast.length === 5) break;
            }
        }

        setWeather(weatherData);
        setForecast(dailyForecast);
    };

    return (
        <>
            <Header />
            <Container sx={{ marginTop: 4, display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", gap: 2, width: "100%", marginBottom: 2 }}>
                    {/* Left: Search and Favorites */}
                    <Box sx={{ width: "30%", position: "sticky", top: "80px" }}>
                        <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                            <SearchBar onSearch={handleSearch} />
                        </Paper>
                        <Paper elevation={3} sx={{ padding: 3 }}>
                            <FavoritesList favorites={favorites} onSelectCity={handleFavoriteClick} />
                        </Paper>
                    </Box>

                    {/* Right: Weather Details */}
                    <Box sx={{ flexGrow: 1, width: "min-content" }}>
                        <Paper elevation={3} sx={{ padding: 3 }}>
                            <WeatherDetails weather={weather} onAddFavorite={addFavorite} />
                            <Forecast forecast={forecast} />
                        </Paper>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default App;
