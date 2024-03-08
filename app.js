
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(bodyParser.json({ limit: '10mb' }));

app.set ('view engine','ejs');
app.use(express.static("public"));


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("views"));


////////////get and post requests////////////////////

app.post("/upload", (req, res) => {
    let src = req.body.src;
    console.log(src+"hii");
    
  });




app.get("/",function(req,res) {
    res.render("home");
});
app.get("/uploaded",function(req,res) {
    console.log("salkdfh")
    res.render("uploaded");

});
////////////get and post requests////////////////////



////////////server listenor////////////////////
app.listen(process.env.PORT || 3000,function() {
    console.log("server started at 3000");
});