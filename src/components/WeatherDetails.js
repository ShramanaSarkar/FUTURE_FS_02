import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const WeatherDetails = ({ weather, onAddFavorite }) => {
    if (!weather) return <Typography align="center">Search for a city to see the weather.</Typography>;

    return (
        <Card sx={{ marginBottom: 2, padding: 2, backgroundColor: "#f7f9fc" }}>
            <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {weather.name} 🌤
                </Typography>
                <Typography>Conditions: {weather.weather[0].description}</Typography>
                <Typography>Temperature: {weather.main.temp}°C</Typography>
                <Typography>Humidity: {weather.main.humidity}%</Typography>
                <Typography>Wind Speed: {weather.wind.speed} m/s</Typography>
                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Button variant="outlined" onClick={() => onAddFavorite(weather.name)}>
                        Add to Favorites
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default WeatherDetails;
