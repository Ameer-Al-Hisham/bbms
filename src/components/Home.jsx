import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";

const Landingpg = () => {
  return (
    <div>
      <Grid
        container
        height={450}
        wrap=""
        sx={{
          backgroundImage: `url("https://img.freepik.com/free-photo/red-wall-with-white-spray-background_1409-1344.jpg?w=826&t=st=1683829498~exp=1683830098~hmac=0dfce94825b033ae79dae0dda619f5c2ead896e3969c6b22079d2f3da15b0aba")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `100%`,
        }}
      >
        <Box width={"600px"} height={"450px"} marginLeft={30} flexWrap={1}>
          <Typography
            variant="h1"
            fontSize={50}
            fontWeight={"Bolder"}
            textAlign={"start"}
            paddingTop={10}
          >
            Save Lives with us
          </Typography>
          <br />
          <Typography variant="h6" textAlign={"start"}>
            We are thrilled to have you here and appreciate your interest in our
            mission to save lives through blood donation. We are committed to
            ensuring a steady supply of safe and high-quality blood products to
            hospitals and clinics in need. We rely on the generosity of donors
            like you to make this possible, and we are dedicated to making the
            donation process as easy and convenient as possible.
          </Typography>
        </Box>
        <Box height={"450px"} flexWrap={1} marginLeft={30}>
          <img
            src="https://o.remove.bg/downloads/2e1a40e7-5785-47bc-b6a5-2c75f62bcfc7/image-removebg-preview.png"
            alt="img"
          />
        </Box>
      </Grid>
    </div>
  );
};

export default Landingpg;
