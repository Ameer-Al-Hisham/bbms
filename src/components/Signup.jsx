import { useForm } from "react-hook-form";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const paperStyle = {
    padding: 60,
    height: "",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };

  const { register, handleSubmit } = useForm();

  async function addUser(data) {
    await axios
      .post("http://localhost:5555/create/signup", data)
      .then((res) => {
        alert(res.data);
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
          onClick={handleSubmit(addUser)}
        >
          Sign Up
        </Button>

        <Typography>
          {" "}
          Already have an account ?<Link to="/login">Login</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signup;
