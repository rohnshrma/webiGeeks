const express = require("express");
const app = express();


// middlewares
app.set("view engine","ejs")



// routes
app.get("/",(req,res)=>{
    res.render("home")
})










app.listen(3000 || process.env.PORT,()=>{
    console.log("Server started on port : 3000");
})