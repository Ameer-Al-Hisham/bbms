const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Ameer_Al_Hisham:simplepass@cluster0.iaopnwq.mongodb.net/UsersDatas?retryWrites=true&w=majority"
);

//schema
const schema = mongoose.Schema;
var donorSchema = new schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  bloodType: String,
  ailments: String,
});

var receiverSchema = new schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  bloodType: String,
  quantity: Number
});

var requestSchema = new schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  bloodType: String,
  ailments: String,
  quantity: Number,
  requestType : String
});

var loginSchema = new schema({
  name: String,
  email: String,
  phone: String,
  password: String,
});

var donorInfo = mongoose.model("Donor", donorSchema);
var receiverInfo = mongoose.model("Receiver", receiverSchema);
var requestInfo = mongoose.model("Requests", requestSchema);
var loginInfo = mongoose.model("LoginInfo", loginSchema);
module.exports = { donorInfo, receiverInfo, requestInfo, loginInfo };
