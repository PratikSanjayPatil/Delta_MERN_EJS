const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.send("<h1>This is home page!</h1>");
});

app.get("/rollDice",(req,res)=>{
    let diceVal = Math.floor(Math.random() * 6) + 1;
    console.log(diceVal);
    res.render("rollDice.ejs",{ diceVal })
})

app.listen(port,()=>{
    console.log(`App was listening on port ${port}`);
});
