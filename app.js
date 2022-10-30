const express = require("express");
const app = express();






// routes
app.get("/",(req,res)=>{
    res.send("Welcome to webigeeks")
})










app.listen(3000 || process.env.PORT,()=>{
    console.log("Server started on port : 3000");
})