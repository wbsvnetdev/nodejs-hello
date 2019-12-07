const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var requestIp = require('request-ip');
require('dotenv').config()
const request = require("request");


const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({

  extended: true

}));

console.log("Hello Treeptik")

app.get("/", function(req, res){

  const clientIp = requestIp.getClientIp(req);

  baseURL = "https://api.ipgeolocation.io/ipgeo?apiKey="
  ip=clientIp
  url = baseURL+process.env.API_KEY_IPGEO+"&ip="+ip
  

  request({url: url, json:true}, (error, response) => {
   
    country_flag = response.body.country_flag
    res.render("home", {clientip: ip, country_flag: country_flag})
  })
    
})

app.listen(3030, function(){
  console.log("Server listening on port 3030")
})


