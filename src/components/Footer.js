import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ 
            position: "fixed", 
            bottom: 0, 
            width: "100%", 
            backgroundColor: "primary.main",  // Matches header color
            color: "white", 
            padding: 1, 
            textAlign: "center"
        }}>
            <Typography variant="body2">Weather Data Powered by <strong>OpenWeather</strong></Typography>
        </Box>
    );
};

export default Footer;
