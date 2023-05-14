const express = require("express");
const cors = require("cors");
const infof = require("./model");

// Express init
const app = new express;
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(cors());

app.get("/",(req,res)=>{
    res.send("hi")
})


//Setting port number
app.listen(5555, ()=>{
    console.log("Server is running in port 5000")
});