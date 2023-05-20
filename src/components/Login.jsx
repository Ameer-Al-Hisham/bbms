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
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const { register, handleSubmit } = useForm();

  /*async function verifylogin(data)
  { 
    await axios.get(`http://localhost:5555/view/user?mail=${data.email}`).then((res)=>{
      var result = res.data;
      console.log(result)
      if(data.email === "" || data.password === "")
      {
          alert("complete fields")
      }
      else if(result === "NewUser")
      {
          alert("newuser signup")
          window.location = "http://localhost:3000/signup"
      }
      else
      {
          
      }
  });
  }*/
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
          {...register("email")}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          {...register("password")}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleSubmit()}    //pass function name inside the handlesubmit's paranthesis
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
