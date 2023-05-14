const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Ameer_Al_Hisham:simplepass@cluster0.iaopnwq.mongodb.net/UsersDatas?retryWrites=true&w=majority");

//schema
const schema = mongoose.Schema;
var donorSchema = new schema({
    Name : String,
    Age : Number,
    Email : String,
    Phone : String,
    BloodType : String,
}) ;

var receiverSchema = new schema({
    Name : String,
    Age : Number,
    Email : String,
    Phone : String,
    BloodType : String,
    Quantity : Number
}) ;

var requestSchema = new schema({
    Name : String,
    Age : Number,
    Email : String,
    Phone : String,
    BloodType : String,
    Quantity : Number,
    Type : String,
}) ;

var loginSchema = new schema({
    Name : String,
    Email : String,
    Phone : String,
    Password : String
}) ;


var donorInfo = mongoose.model("Donor",donorSchema);
var receiverInfo = mongoose.model("Receiver",receiverSchema);
var requestInfo = mongoose.model("Requests", requestSchema);
var loginInfo = mongoose.model("LoginInfo",loginSchema)
module.exports = {donorInfo,receiverInfo,requestInfo,loginInfo};
