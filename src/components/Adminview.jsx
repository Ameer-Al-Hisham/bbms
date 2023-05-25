import {
  Button,
  TextField,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Dialog,
  DialogTitle,
  List,
  Container,
  ListItem,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { insertdonor } from "./unifun";
import { Link } from "react-router-dom";

const Adminview = () => {
  var [value, setvalue] = React.useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5555/view/donor?status=approved")
      .then((res) => {
        setvalue(res.data);
      });
  }, []);

  const { register, handleSubmit } = useForm();
  async function admininsert(data) {
    if (
      data.name === "" ||
      data.age === "" ||
      data.email === "" ||
      data.phone === "" ||
      data.bloodType === ""
    ) {
      setopen1(true);
    } else {
      data.status = "approved";
      data.requestType = "Donate";
      insertdonor(data);
    }
  }

  var [open, setopen] = React.useState(false);
  const close = () => {
    setopen(false);
  };

  var [delopen, delsetopen] = React.useState(false);
  const delclose = () => {
    delsetopen(false);
  };

  var [open1, setopen1] = React.useState(false);
  const close1 = () => {
    setopen1(false);
  };

  var [delval, setdelval] = React.useState("");

  async function admindelete(data) {
    if (data.email === "") {
      setopen1(true);
    } else {
      await axios
        .get(`http://localhost:5555/delete?email=${data}`)
        .then((res) => {
          alert(res.data);
        });
    }
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
          <Toolbar>
            <Button
              sx={{ color: "black", fontSize: "17px", fontWeight: "bold" }}
            >
              Update
            </Button>

            <Button
              sx={{ color: "black", fontSize: "17px", fontWeight: "bold" }}
              onClick={() => delsetopen(true)}
            >
              Delete
            </Button>
            <Typography
              component="div"
              fontSize={"30px"}
              sx={{ flexGrow: 1, textAlign: "center", color: "black" }}
            >
              Meet the Guardians
            </Typography>
            <Button
              sx={{ color: "black", fontSize: "17px", fontWeight: "bold" }}
              onClick={() => setopen(true)}
            >
              Add
            </Button>
            <Link to={"/login"}>
              <Button
                sx={{ color: "black", fontSize: "17px", fontWeight: "bold" }}
              >
                Logout
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <Stack direction={"row"} flexWrap={"wrap"} alignItems={"center"}>
        {value.map((data, index) => {
          return (
            <Card
              sx={{
                width: "23%",
                height: "%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "20px",
                backgroundColor: "lightyellow",
                backgroundImage: `url(https://i.ibb.co/5rX9nfq/old-grunge-background-196038-21223.jpg)`,
                backgroundSize: "100% 100%",
              }}
            >
              <CardContent>
                <Typography textAlign={"center"} fontSize={"20px"}>
                  Name: {data.name}
                </Typography>
                <Typography textAlign={"center"} fontSize={"20px"}>
                  Age: {data.age}
                </Typography>
                <Typography textAlign={"center"} fontSize={"20px"}>
                  Blood Type: {data.bloodType}
                </Typography>
                <Typography textAlign={"center"} fontSize={"20px"}>
                  Mail: {data.email}
                </Typography>
                <Typography textAlign={"center"} fontSize={"20px"}>
                  Phone: {data.phone}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>

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
                onClick={handleSubmit(admininsert)}
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

      <Dialog
        open={delopen}
        onClose={delclose}
        sx={{ height: "100%", width: "100%" }}
      >
        <DialogTitle>Delete Donor</DialogTitle>
        <Container>
          <TextField
            required
            sx={{ marginTop: "2%", width: "300px" }}
            variant="outlined"
            label="Email"
            size="normal"
            value={delval}
            onChange={(e) => {
              setdelval(e.target.value);
            }}
          />
          <Box sx={{ width: "100%", height: "80px" }}>
            <Button
              variant="contained"
              sx={{
                marginTop: "2%",
                marginLeft: "28%",
                width: "50%",
                height: "60%",
              }}
              onClick={() => {
                admindelete(delval);
              }}
            >
              Delete
            </Button>
          </Box>
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

export default Adminview;
