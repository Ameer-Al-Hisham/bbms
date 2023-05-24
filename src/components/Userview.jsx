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
import { insertdonor, insertreceiver } from "./unifun";

const UserView = () => {
  var [value, setvalue] = React.useState([]);
  useEffect(() => {
    axios.get("http://localhost:5555/view/donor?status=pending").then((res) => {
      setvalue(res.data);
    });
  }, []);

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
      var reqtype = data.requestType;
      data.status = "pending";
      if (reqtype == "Donate") {
        insertdonor(data);
      } else if (reqtype == "Receive") {
        insertreceiver(data);
      }
    }
  }

  var [open1, setopen1] = React.useState(false);
  const close1 = () => {
    setopen1(false);
  };

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(https://i.ibb.co/VTMWnkL/image.png)`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
            <Toolbar>
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
                Request
              </Button>
              <Button
                sx={{ color: "black", fontSize: "17px", fontWeight: "bold" }}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

        <p style={{ fontSize: "20px", textAlign: "center" }}>
          A hub of hope where an extensive network of compassionate individuals
          awaits, ready to lend a helping hand through the gift of blood. With
          an abundance of available blood donors, we strive to ensure timely and
          vital support for those in need. Our platform boasts a diverse
          community of donors, representing various blood types and Rh factors.
          This rich diversity enhances the chances of finding a compatible match
          for patients from all walks of life, promoting inclusivity and
          increased access to life-saving transfusions.
        </p>

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
      <Box width={"100%"} height={"800px"} >

      </Box>

      </Box>
    </div>
  );
};

export default UserView;
