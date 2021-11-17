const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index")
});

let port = process.env.PORT;
if (port == null || port == ""){
port = 3000;
}

app.listen (port, function (){
  console.log("Server started successfully");
});