import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <TextField
                fullWidth
                label="Enter City"
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Button fullWidth variant="contained" onClick={() => onSearch(city)}>
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;
