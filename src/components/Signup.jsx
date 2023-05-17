import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Signup = () => {
  const [value, setValue] = useState(null);

  const paperStyle = {
    padding: 60,
    height: "",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };

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
            type="text"
            fullWidth
            required
          />
        </p>
        <p>
          <Typography align="left">Enter Email-id</Typography>
          <TextField
            placeholder="Enter email"
            type="email"
            fullWidth
            required
          />
        </p>
        <p>
          <Typography align="left">Enter Date of Birth</Typography>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
                renderInput={(props) => <TextField {...props} />}
              />
            </LocalizationProvider>
          </Box>
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
        <p>
          <h6>
            By clicking Sign Up, you agree to our Terms, Privacy Policy. You may
            receive SMS notifications from us and can opt out at any time.
          </h6>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign Up
          </Button>
        </p>

        <Typography>
          {" "}
          Already have an account ?<Link href="#">Login</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signup;
