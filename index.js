const express = require("express");
const scraper = require("./scraper")
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const BASE_URL = "https://detailed.com/"

app.route("/")

.get((req, res)=>{
  res.render("index", {msg: ""})
})

.post(async (req, res)=>{
  const url = req.body.url
  if (url){
    scraped = await scraper(url)
    if (scraped){
      if(scraped.success){
        return res.render("blogs", {data: scraped.data})
      } else{
        return res.render("index", {msg : "Data cannot be scraped for the given url at this moment."})
      }
    } else{
      return res.render("index", {msg: "Please enter a valid URL"})
  }
} else {
  return res.render("index", {msg: "Please enter a URL before submitting"})
}
});


let port = process.env.PORT;
if (port == null || port == ""){
port = 3000;
}

app.listen (port, function (){
  console.log("Server started successfully");
});