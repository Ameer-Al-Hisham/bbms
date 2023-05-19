import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
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
        <p>
          <Typography align="left">Enter Full Name</Typography>
          <TextField
            placeholder="Enter full name"
            {...register("name")}
            type="text"
            fullWidth
            required
          />
        </p>
        <p>
          <Typography align="left">Enter Email-id</Typography>
          <TextField
            {...register("email")}
            placeholder="Enter email"
            type="email"
            fullWidth
            required
          />
        </p>
        <p>
          <Typography align="left">Enter Phone Number</Typography>
          <TextField
            placeholder="Enter phone number"
            {...register("phone")}
            type="text"
            fullWidth
            required
          />
        </p>

        <p>
          <Typography align="left">Select Gender</Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </p>

        <p>
          <Typography align="left">Set Password</Typography>
          <TextField
            placeholder="Enter password"
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
            placeholder="Re-Enter password"
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
