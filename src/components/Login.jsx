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
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

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

  var [open, setopen] = React.useState(false);
  var [open1, setopen1] = React.useState(false);
  var [open2, setopen2] = React.useState(false);

  const close = () => {
    setopen(false);
    setopen1(false);
    setopen2(false);
  };

  async function verifylogin(data) {
    if (data.email === "superuser@gmail.com" && data.password === "admin123") {
      alert("login successful");
      window.location = "http://localhost:3000/adminview";
    }
    else{
    await axios
      .get(`http://localhost:5555/view/user?mail=${data.email}`)
      .then((res) => {
        var result = res.data;
        var usermail = data.email;
        var userpass = data.password;
        if (data.email === "" || data.password === "") {
          setopen(true);
        } else if (result === "NewUser") {
          setopen1(true);
        } else {
          var fetchmail = result.email;
          var fetchpass = result.password;
          if (fetchmail === usermail && fetchpass === userpass) {
            alert("login successfull");
            window.location = "http://localhost:3000/userview";
          } else {
            setopen2(true);
          }
        }
      });
  }}
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
          onClick={handleSubmit(verifylogin)} //pass function name inside the handlesubmit's paranthesis // uva uva enikkariyam
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

        <Snackbar open={open} autoHideDuration={6000} onClose={close}>
          <Alert severity="error" sx={{ width: "100%" }}>
            Fill all fields to continue!!
          </Alert>
        </Snackbar>

        <Snackbar open={open1} autoHideDuration={6000} onClose={close}>
          <Alert severity="warning" sx={{ width: "100%" }}>
            Looks like a new user. Signup to continue.
          </Alert>
        </Snackbar>

        <Snackbar open={open2} autoHideDuration={6000} onClose={close}>
          <Alert severity="error" sx={{ width: "100%" }}>
            Incorrect Email or Password.Try again!!
          </Alert>
        </Snackbar>
      </Paper>
    </Grid>
  );
};

export default Login;
