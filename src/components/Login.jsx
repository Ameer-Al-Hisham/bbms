import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <Typography
            variant="h4"
            gutterBottom
            color="#880e4f"
            sx={{ textDecoration: "underline" }}
          >
            Sign In
          </Typography>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter email"
          type="email"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          {" "}
          Don't have an account ?
          <Link to="/signup">
            <Button variant="contained" color="success">
              Create Account
            </Button>
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
