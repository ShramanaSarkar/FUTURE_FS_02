import React from "react";
import { Card, Typography, Grid } from "@mui/material";

const Forecast = ({ forecast }) => {
    if (!Array.isArray(forecast) || forecast.length === 0) {
        return <Typography textAlign={"center"}>No forecast data available.</Typography>;
    }

    return (
        <div>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
                5-Day Forecast
            </Typography>
            <Grid container spacing={2}>
                {forecast.map((day, index) => (
                    <Grid item xs={12} sm={2} key={index}>
                        <Card sx={{ textAlign: "center", padding: 2 }}>
                            <Typography variant="subtitle1">{day.date}</Typography>
                            <img 
                                src={`https://openweathermap.org/img/wn/${day.icon}.png`} 
                                alt={day.condition} 
                                style={{ width: 50, height: 50 }} 
                            />
                            <Typography>Temp: {day.temp}°C</Typography>
                            <Typography>Condition: {day.condition}</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Forecast;
