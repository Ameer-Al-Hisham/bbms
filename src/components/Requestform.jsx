import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RequestForm = () => {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  async function addRequest(data) {
    await axios
      .post("http://localhost:5555/create/request", data)
      .then((res) => {
        alert(res.data);
      });
  }

  return (
    <div>
      <Card
        sx={{
          minWidth: 275,
          height: 700,
          width: 600,
          marginLeft: 50,
          marginTop: 3,
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: 26,
              fontFamily: "initial",
              textDecoration: "underline",
            }}
            color="black"
            gutterBottom
          >
            Request Form
          </Typography>
          <TextField
            required
            sx={{ marginLeft: 0, marginTop: 4 }}
            variant="standard"
            label="Name"
            size="normal"
            {...register("name")}
          />
          <TextField
            required
            sx={{ marginLeft: -24, marginTop: 12 }}
            variant="standard"
            label="Age"
            size="normal"
            {...register("age")}
          />
          <TextField
            required
            sx={{ marginLeft: -24, marginTop: 20 }}
            variant="standard"
            label="Email ID"
            size="normal"
            type="email"
            {...register("email")}
          />
          <TextField
            required
            sx={{ marginLeft: -24, marginTop: 28 }}
            variant="standard"
            label="Phone No"
            size="normal"
            {...register("phone")}
          />
          <Typography sx={{ marginLeft: -20, marginTop: 5 }}>
            Blood Type requested/donating :
          </Typography>
          <TextField
            required
            sx={{ marginLeft: 35, marginTop: -6 }}
            variant="standard"
            label="Blood type"
            size="normal"
            {...register("bloodType")}
          />
          <Typography sx={{ marginLeft: -32, marginTop: 6 }}>
            Pre-defined ailments, if any :
          </Typography>
          <TextField
            sx={{ marginLeft: 35, marginTop: -3 }}
            {...register("ailments")}
          />
          <Typography sx={{ marginLeft: -21, marginTop: 4 }}>
            No: of units of blood required, if receiver:
          </Typography>
          <TextField
            sx={{ marginLeft: 46, marginTop: -5 }}
            variant="standard"
            label="Units of Blood"
            size="small"
            {...register("quantity")}
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            sx={{ marginLeft: 30, marginTop: -3 }}
            onClick={handleSubmit(addRequest)}
          >
            Submit
          </Button>
        </CardActions>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </Card>
    </div>
  );
};

export default RequestForm;
