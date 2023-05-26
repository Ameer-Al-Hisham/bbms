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
  res.send("donor request submitted");
});

app.post("/create/receiver", (req, res) => {
  var data = new infof.receiverInfo(req.body);
  data.save();
  res.send("receiver request submitted");
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
  var result = await infof.donorInfo.find({ status: req.query.status });
  if (String(result) == "") {
    res.send([]);
  } else {
    res.send(result);
  }
});

app.get("/check/donor", async (req, res) => {
  var result = await infof.donorInfo.find({ email: req.query.email });
  if (String(result) == "") {
    res.send(null);
  } else {
    res.send(result);
  }
});

app.get("/view/user", async (req, res) => {
  var result = String(await infof.loginInfo.find({ email: req.query.mail }));
  var objres = await infof.loginInfo.find({ email: req.query.mail });
  if (result == "") {
    res.send("NewUser");
  } else {
    res.send({ email: objres[0].email, password: objres[0].password });
  }
});

app.get("/delete", async (req, res) => {
  console.log(
    await infof.donorInfo.findOneAndDelete({ email: req.query.email })
  );

  res.send("Deleted SuccessFully");
});
//Setting port number
app.listen(5555, () => {
  console.log("Server is running in port 5555");
});
