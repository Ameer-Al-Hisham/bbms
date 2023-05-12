import React from "react";
import { Grid, Box, Typography,Card, CardContent, Button} from "@mui/material";
import { Link } from "react-router-dom";

const Landingpg = () => {
  return (
    <div>
      <Grid
        container
        height={"450px"}
        sx={{
          backgroundImage: `url("https://i.ibb.co/vdQPQdm/image.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 450px",
        }}
      >
        <Box width={"600px"} height={"450px"} marginLeft={30}>
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
        <Box width={"55.8%"} >
        <Link to = "/add">
        <Button variant="outlined" sx={{width:"200  px",height:"50px",borderRadius:20,backgroundColor:"red",marginTop:"350px",marginLeft:"50px",color:"black",borderWidth:"1px",}}> 
          Login/Sign up 
        </Button>
        </Link>
        </Box>
      </Grid>


      <Box sx={{backgroundSize: "100% 100%",backgroundRepeat:"no-repeat",backgroundImage:`url("https://i.ibb.co/3v4gL2J/image.png")`}}>
      <Grid container sx={{}}>
        <Card sx={{width: "23%",height:"300px",marginLeft:"auto",marginRight :"auto",marginTop:"20px",backgroundColor:"lightyellow"}}>
          <CardContent >
              <Typography variant="h5"  gutterBottom fontSize={"30px"}>
                  Blood Type A:
              </Typography>
              <ul style={{textAlign:"start",fontSize:"20px"}}>
                  <li>Has the A antigen on red blood cells.</li>
                  <li>Can donate blood to those with type A or AB.</li>
                  <li>Can receive blood from those with type A or O.</li>
              </ul>
          </CardContent>
        </Card>

        <Card sx={{width: "23%",height:"300px",marginLeft:"auto",marginRight :"auto",marginTop:"20px",backgroundColor:"pink"}}>
          <CardContent >
              <Typography variant="h5"  gutterBottom fontSize={"30px"}>
                  Blood Type B :
              </Typography>
              <ul style={{textAlign:"start",fontSize:"20px"}}>
                  <li>Has the B antigen on red blood cells.</li>
                  <li>Can donate blood to those with type B or AB.</li>
                  <li>Can receive blood from those with type B or O.</li>
              </ul>
          </CardContent>
        </Card>

        <Card sx={{width: "23%",height:"300px",marginLeft:"auto",marginRight :"auto",marginTop:"20px",backgroundColor:"lightblue"}}>
          <CardContent >
              <Typography variant="h5"  gutterBottom fontSize={"30px"}>
                  Blood Type O :
              </Typography>
              <ul style={{textAlign:"start",fontSize:"20px"}}>
                  <li>Has no A or B antigens on red blood cells.</li>
                  <li>Can donate blood to those with any blood type (universal donor).</li>
                  <li>Can receive blood only from those with type O.</li>
              </ul>
          </CardContent>
        </Card>

        <Card sx={{width: "23%",height:"300px",marginLeft:"auto",marginRight :"auto",marginTop:"20px",backgroundColor:"white"}}>
          <CardContent >
              <Typography variant="h5"  gutterBottom fontSize={"30px"}>
                  Blood Type AB :
              </Typography>
              <ul style={{textAlign:"start",fontSize:"20px"}}>
                  <li>Has both A and B antigens on red blood cells.</li>
                  <li>Can donate blood only to those with type AB.</li>
                  <li>Can receive blood from those with type A, B, AB, or O (universal recipient).</li>
              </ul>
          </CardContent>
        </Card>
      </Grid>

        <Box sx={{ marginTop:"20px", marginLeft:30}}>
            <Typography textAlign={"start"} variant="h6" fontSize={"28px"}>
                Eligibility Requirements:
            </Typography>

            <ul style={{textAlign:"start", fontSize:"21px"}}>
              <li>Donors must be at least 17 years old (16 years old with parental consent in some states).</li>
              <li>Donors must weigh at least 110 pounds.</li>
              <li>Donors must be in good health and feeling well on the day of donation.</li>
              <li>Donors must not have donated blood in the last 56 days (or 112 days for double red cell donations).</li>
              <li>Donors must meet other eligibility requirements related to travel, medication, and medical history. </li>
            </ul>

            <Typography textAlign={"start"} variant="h6" fontSize={"28px"}>
                Donation Process:
            </Typography>

            <ul style={{textAlign:"start", fontSize:"21px"}}>
              <li>The blood donation process usually takes about an hour from start to finish.</li>
              <li>Donors will be asked to complete a health questionnaire and have their vitals checked before the donation.</li>
              <li>The actual donation only takes about 10-15 minutes and involves a small needle prick.</li>
              <li>After the donation, donors will be offered snacks and drinks to help replenish fluids and nutrients.</li>
            </ul>

            <Typography textAlign={"start"} variant="h6" fontSize={"28px"}>
                FAQs:
            </Typography>

            <ul style={{textAlign:"start", fontSize:"21px"}}>
              <li>Is donating blood safe? <b>Answer: Yes, donating blood is safe and all blood donation procedures are sterile and strictly regulated.</b></li>
              <li>How often can I donate blood? <b>Answer: You can donate whole blood every 56 days or double red cells every 112 days.</b></li>
              <li>Will donating blood hurt? <b>Answer: You may feel a slight pinch or discomfort during the needle prick, but it should not be painful. Most donors report feeling only mild discomfort.</b></li>
              <li>Can I donate blood if I have a tattoo or piercing? <b>Answer: Yes, as long as the tattoo or piercing was done at a licensed facility and has fully healed.</b> </li>
            </ul>
        </Box>
        <hr style={{borderWidth:"5px"}}></hr>
        <Box height={"300px"} width={"100%"}>
          <Box sx={{
          backgroundImage: `url("https://i.ibb.co/txk3nn6/image.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize:"100% 100%",
          width:"200px",height:"150px",
          marginLeft:"45%"
        }}>

        </Box>
        `<Typography fontSize={"17px"} fontWeight={"bold"}>Some Blood Bank</Typography>
          <Typography fontSize={"17px"} fontWeight={"bold"}>Contact:854729164389</Typography>
          <Typography fontSize={"17px"} fontWeight={"bold"}>somebloodbank@gmail.com</Typography>
        </Box>
        </Box>
    </div>
  );
};

export default Landingpg;
