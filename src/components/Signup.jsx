import { useForm } from "react-hook-form";
import React from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
const Signup = () => {
  const paperStyle = {
    padding: 60,
    height: "",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };

  const { register, handleSubmit } = useForm();
  var[open,setopen] = React.useState(false);
  var[open1,setopen1] = React.useState(false);
  var[open2,setopen2] = React.useState(false);

  const close = () =>
  {
    setopen(false)
    setopen1(false)
    setopen2(false)
  }

  async function insertuser(data)
{
    await axios.get(`http://localhost:5555/view/user?mail=${data.email}`).then((res)=>{
        var result = res.data;
        if(data.name === "" || data.email === "" || data.phone === "" || data.password === "")
        {
            setopen1(true)
        }
        else if(result === "NewUser")
        {
            axios.post('http://localhost:5555/create/signup',data).then((res)=>{setopen2(true);
            alert("Signup Successful Login to continue")});
            window.location = "http://localhost:3000/login"
        }
        else
        {
            setopen(true)
        }
    });
    
}

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Typography
            variant="h4"
            gutterBottom
            color="#c51162"
            sx={{ textDecoration: "underline" }}
          >
            Create Account
          </Typography>
        </Grid>
        <Typography>All fields are required</Typography>
        <br />
        <p>
          <Typography align="left">Enter Full Name</Typography>
          <TextField {...register("name")} type="text" fullWidth required />
        </p>
        <p>
          <Typography align="left">Enter Email-id</Typography>
          <TextField
            {...register("email")}
            placeholder="abcd@xyz.com"
            type="email"
            fullWidth
            required
          />
        </p>
        <p>
          <Typography align="left">Enter Phone Number</Typography>
          <TextField {...register("phone")} type="text" fullWidth required />
        </p>

        <p>
          <Typography align="left">Set Password</Typography>
          <TextField
            {...register("password")}
            type="password"
            fullWidth
            required
          />
        </p>

        <p>
          <Typography align="left">Re-enter Password</Typography>
          <TextField
            id="outlined-error-helper-text"
            helperText=""
            type="password"
            fullWidth
            required
          />{" "}
        </p>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleSubmit(insertuser)}
        >
          Sign Up
        </Button>

        <Typography>
          {" "}
          Already have an account ?<Link to="/login">Login</Link>
        </Typography>

        <Snackbar open={open} autoHideDuration={6000} onClose={close}>
        <Alert severity="success" sx={{ width: '100%' }}>
          This mail is already registered!!
        </Alert>
      </Snackbar>

      <Snackbar open={open1} autoHideDuration={6000} onClose={close}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Fill all fields to continue!!
        </Alert>
      </Snackbar>

      <Snackbar open={open2} autoHideDuration={6000} onClose={close}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Registered successfully!!
        </Alert>
      </Snackbar>


      </Paper>
    </Grid>
  );
};

export default Signup;
