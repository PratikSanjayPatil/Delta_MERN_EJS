const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine","ejs");

//help to find ejs file path
app.set("views",path.join(__dirname,"views"));

//Use for link css file in ejs file in instagram.ejs file we link css file for 
//creat public folder in that we create css folder and then we create style.css
//file thats very important. and after that this line of code is imp.
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.send("this is home page!");
})

app.get("/ig/:username",(req,res)=>{
    let data = require("./instaData.json");
    let {username} = req.params;
    let instaData = data[username];
    if(instaData){
        res.render("instagram.ejs",{username, data: instaData});
    }else{
        res.render("error.ejs")
    }
    
})

app.listen(port,()=>{
    console.log(`app was listening on port: ${port}`);
})
