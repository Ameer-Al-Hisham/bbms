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
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { insertdonor } from "./unifun";
import { Link } from "react-router-dom";

const Adminview = () => {
  var [donorStatus, setStatus] = useState("approved");
  var [nameget, setnameget] = useState("");
  var [ageget, setageget] = useState("");
  var [emailget, setemailget] = useState("");
  var [bloodget, setbloodget] = useState("");
  var [phoneget, setphoneget] = useState("");
  const donorPending = () => {
    setStatus("pending");
  };
  const donorApproved = () => {
    setStatus("approved");
  };
  const donorRejected = () => {
    setStatus("rejected");
  };


  async function updateadminget(data)
  {
    await axios.get(`http://localhost:5555/get/donor?email=${data}`).then((res)=>{
      setnameget(res.name)
      setageget(res.age)
      setemailget(res.email)
      setphoneget(res.phone)
      setbloodget(res.bloodType)
      setUpdateOpen(true);
    })
  }

  var [value, setvalue] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5555/view/donor?status=${donorStatus}`)
      .then((res) => {
        setvalue(res.data);
      });
  }, []);

  var [open1, setopen1] = useState(false);
  const close1 = () => {
    setopen1(false);
  };
  var [open2, setopen2] = useState(false);
  const close2 = () => {
    setopen2(false);
  };

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

  var [open, setopen] = useState(false);
  const close = () => {
    setopen(false);
  };

  var [delopen, delsetopen] = useState(false);
  const delclose = () => {
    delsetopen(false);
  };

  var [emailCheckOpen, setEmailCheckOpen] = useState(false);
  const emailCheckClose = () => {
    setEmailCheckOpen(false);
  };

  var [updateOpen, setUpdateOpen] = useState(false);
  const updateClose = () => {
    setUpdateOpen(false);
  };

  var [delval, setdelval] = useState("");
  var [updateCheckEmail, setUpdateCheckEmail] = useState("");

  async function admindelete(data) {
    if (data === "") {
      setopen1(true);
    } else {
      await axios
        .get(`http://localhost:5555/check/donor?email=${data}`)
        .then(async (res) => {
          try {
            if (res.data[0].email === data) {
              await axios
                .get(`http://localhost:5555/delete?email=${data}`)
                .then((res) => {
                  if (res.data === null) {
                    setopen2(true);
                  } else {
                    alert(res.data);
                  }
                });
            }
          } catch (error) {
            setopen2(true);
          }
        });
    }
  }

  const checkEmail = async (data) => {
    if (data === "") {
      setopen1(true);
    } else {
      await axios
        .get(`http://localhost:5555/check/donor?email=${data}`)
        .then(async (res) => {
          try {
            if (res.data[0].email === data) {
              setnameget(res.data[0].name)
              setageget(res.data[0].age)
              setemailget(res.data[0].email)
              setphoneget(res.data[0].phone)
              setbloodget(res.data[0].bloodType)
              setUpdateOpen(true);
              console.log(nameget,ageget,emailget,phoneget,bloodget)
              console.log(res)
            }
          } catch (error) {
            setopen2(true);
          }
        });
    }
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
        <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
          <Toolbar>
            <Button
              sx={{ color: "black", fontSize: "17px", fontWeight: "bold" }}
              onClick={() => delsetopen(true)}
            >
              Update/delete
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
              key={index}
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
                label="name"
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
        <DialogTitle>Update/delete Donor</DialogTitle>
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
              setUpdateCheckEmail(e.target.value)
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
            <Button
              variant="contained"
              sx={{
                marginTop: "2%",
                marginLeft: "28%",
                width: "50%",
                height: "60%",
              }}
              onClick={() => {
                checkEmail(updateCheckEmail);
                
              }}
            >
              Update
            </Button>
          </Box>
        </Container>
      </Dialog>



      <Dialog
        open={updateOpen}
        onClose={updateClose}
        sx={{ height: "100%", width: "100%" }}
      >
        <DialogTitle>Update Donor</DialogTitle>
        <Container>
          <List>
            <ListItem>
              <TextField
                required
                sx={{ marginTop: "2%", width: "300px" }}
                variant="outlined"
                label="Name"
                size="normal"
                defaultValue={nameget}
                value={nameget}
                onChange={(e) => {
                  setnameget(e.target.value);
                }}
              />
            </ListItem>

            <ListItem>
              <TextField
                required
                sx={{ marginTop: "2%", width: "300px" }}
                variant="outlined"
                label="Age"
                size="normal"
                defaultValue={ageget}
                value={ageget}
                onChange={(e) => {
                  setageget(e.target.value);
                }}
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
                defaultValue={emailget}
                value={emailget}
                onChange={(e) => {
                  setemailget(e.target.value);
                }}
              />
            </ListItem>

            <ListItem>
              <TextField
                required
                sx={{ marginTop: "2%", width: "300px" }}
                variant="outlined"
                label="Phone No"
                size="normal"
                defaultValue={phoneget}
                value={phoneget}
                onChange={(e) => {
                 setphoneget(e.target.value);
                }}
              />
            </ListItem>

            <ListItem>
              <TextField
                required
                sx={{ marginTop: "2%", width: "300px" }}
                variant="outlined"
                label="Blood type"
                size="normal"
                defaultValue={bloodget}
                value={bloodget}
                onChange={(e) => {
                  setbloodget(e.target.value);
                }}
              />
            </ListItem>

            <ListItem>
              <TextField
                sx={{ marginTop: "2%", width: "300px" }}
                variant="outlined"
                label="Ailments"
                size="normal"
                
              />
            </ListItem>

            <ListItem>
              <Button
                variant="contained"
                sx={{ marginTop: "2%", marginLeft: "28%", width: "50%" }}
                onClick={() => { }}
              >
                Submit
              </Button>
            </ListItem>

            <ListItem>
              <Button
                variant="contained"
                sx={{ marginTop: "2%", marginLeft: "28%", width: "50%" }}
                onClick={updateClose}
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
      <Snackbar open={open2} autoHideDuration={6000} onClose={close2}>
        <Alert severity="warning" sx={{ width: "100%" }}>
          Such an entry does not exist!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Adminview;
