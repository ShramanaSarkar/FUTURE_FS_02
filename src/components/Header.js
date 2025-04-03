import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
    return (
        <>
            <AppBar position="fixed" sx={{ top: 0, zIndex: 1300 }}>
                <Toolbar>
                    <Typography variant="h4" sx={{ flexGrow: 1, textAlign: "center" }}>
                        Weather Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* Adds spacing below the header */}
            <Box sx={{ marginBottom: 10 }} />
        </>
    );
};

export default Header;
