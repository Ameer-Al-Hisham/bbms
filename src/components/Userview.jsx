import {
  Button,
  TextField,
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Dialog,
  DialogTitle,
  List,
  Container,
  ListItem,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";

const UserView = () => {
  const { register, handleSubmit } = useForm();

  var [open, setopen] = React.useState(false);
  const close = () => {
    setopen(false);
  };

  const dropvals = [
    {
      value: "Donate",
    },
    {
      value: "Receive",
    },
  ];

  async function insertrequest(data) {
    if (
      data.name === "" ||
      data.age === "" ||
      data.email === "" ||
      data.phone === "" ||
      data.bloodType === "" ||
      data.requestType === ""
    ) {
      setopen1(true);
    } else {
      await axios
        .post("http://localhost:5555/create/request", data)
        .then((res) => {
          alert(res.data);
        });
    }
  }

  var [open1, setopen1] = React.useState(false);
  const close1 = () => {
    setopen1(false);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              WELCOME
            </Typography>
            <Button color="inherit" onClick={() => setopen(true)}>
              Request
            </Button>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Dialog
        open={open}
        onClose={close}
        sx={{ height: "100%", width: "100%" }}
      >
        <DialogTitle>Submit Request Form</DialogTitle>
        <Container>
          <List>
            <ListItem>
              <TextField
                required
                sx={{ marginTop: "2%", width: "300px" }}
                variant="outlined"
                label="Name"
                size="normal"
                {...register("name")}
              />
            </ListItem>

            <ListItem>
              <TextField
                required
                sx={{ marginTop: "2%", width: "300px" }}
                variant="outlined"
                label="Age"
                size="normal"
                {...register("age")}
              />
            </ListItem>

            <ListItem>
              <TextField
                required
                sx={{ marginTop: "2%", width: "300px" }}
                variant="outlined"
                label="Email ID"
                size="normal"
                type="email"
                {...register("email")}
              />
            </ListItem>

            <ListItem>
              <TextField
                required
                sx={{ marginTop: "2%", width: "300px" }}
                variant="outlined"
                label="Phone No"
                size="normal"
                {...register("phone")}
              />
            </ListItem>

            <ListItem>
              <TextField
                required
                sx={{ marginTop: "2%", width: "300px" }}
                variant="outlined"
                label="Blood type"
                size="normal"
                {...register("bloodType")}
              />
            </ListItem>

            <ListItem>
              <TextField
                id="filled-select-currency-native"
                select
                label="Select the request type"
                defaultValue="Donate"
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                sx={{ width: "300px" }}
                {...register("requestType")}
              >
                {dropvals.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
            </ListItem>

            <ListItem>
              <TextField
                sx={{ marginTop: "2%", width: "300px" }}
                variant="outlined"
                label="Quantity"
                size="normal"
                helperText="if receiving"
                {...register("quantity")}
              />
            </ListItem>

            <ListItem>
              <TextField
                sx={{ marginTop: "2%", width: "300px" }}
                variant="outlined"
                label="Ailments"
                size="normal"
                {...register("ailments")}
              />
            </ListItem>

            <ListItem>
              <Button
                variant="contained"
                sx={{ marginTop: "2%", marginLeft: "28%", width: "50%" }}
                onClick={handleSubmit(insertrequest)}
              >
                Submit
              </Button>
            </ListItem>

            <ListItem>
              <Button
                variant="contained"
                sx={{ marginTop: "2%", marginLeft: "28%", width: "50%" }}
                onClick={close}
              >
                Back
              </Button>
            </ListItem>
          </List>
        </Container>
      </Dialog>
      <Snackbar open={open1} autoHideDuration={6000} onClose={close1}>
        <Alert severity="warning" sx={{ width: "100%" }}>
          Fill necessary fields to continue!!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default UserView;
