const express = require("express");
const cors = require("cors");
const infof = require("./model");

// Express init
const app = new express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/create/donor", (req, res) => {
  var data = new infof.donorInfo(req.body);
  data.save();
  res.send("donor created");
});

app.post("/create/receiver", (req, res) => {
  var data = new infof.receiverInfo(req.body);
  data.save();
  res.send("user updated");
});

app.post("/create/request", (req, res) => {
  var data = new infof.requestInfo(req.body);
  data.save();
  res.send("Request Submitted");
});

app.post("/create/signup", (req, res) => {
  var data = new infof.loginInfo(req.body);
  data.save();
  res.send("Signup Successful");
});

app.get("/view/donor", async (req, res) => {
  var result = await infof.donorInfo.find();
  res.send(result);
});

app.get("/view/user",async (req,res)=>{
  var result = String(await infof.loginInfo.find({email:req.query.mail}));
  var objres = await infof.loginInfo.find({email:req.query.mail});
  if (result == "")
      {res.send("NewUser")}
  else
      {res.send("ExsistingUser")}
});
//Setting port number
app.listen(5555, ()=>{
    console.log("Server is running in port 5000");
});
