import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Blood Bank
            </Typography>
            <Button variant="contained" color="error">
              <Link to={"/login"}>Login</Link>
            </Button>
            <Button variant="contained" color="error">
              <Link to={"/signup"}>SignUp</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
  );
};

export default NavBar;
