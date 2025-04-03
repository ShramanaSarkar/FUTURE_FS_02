import React from "react";
import { List, ListItem, ListItemText, Typography, Paper } from "@mui/material";

const FavoritesList = ({ favorites, onSelectCity }) => {
    return (
        <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Favorite Cities
            </Typography>
            <List>
                {favorites.length > 0 ? (
                    favorites.map((city, index) => (
                        <ListItem 
                            button 
                            key={index} 
                            onClick={() => onSelectCity(city)}
                            sx={{ "&:hover": { backgroundColor: "#f0f0f0" }, cursor: "pointer" }}
                        >
                            <ListItemText primary={city} />
                        </ListItem>
                    ))
                ) : (
                    <Typography>No favorites added.</Typography>
                )}
            </List>
        </Paper>
    );
};

export default FavoritesList;
