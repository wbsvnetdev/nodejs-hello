const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({

  extended: true

}));

console.log("Hello Treeptik")

app.get("/", function(req, res){
    res.render("home")
})

app.listen(3030, function(){
  console.log("Server listening on port 3030")
})


