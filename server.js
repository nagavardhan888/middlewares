const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const userroute = require("./models/user")
mongoose.connect("mongodb://localhost:27017/middleware")
.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
    console.log("error connecting to database",err)
})
app.post("/email",async (req,res,next)=>{
    try{
        const newUser = await userroute.create({
            email:req.body.email

        })
        res.status(201).json({
            status:"success",
            data:newUser
        })
    }catch(err){
        next(err)
    }
})
app.use((req,res,next)=>{
    const err = new Error("route not found");
    err.status = 401;
    next(err)
})
app.use((err,req,res,next)=>{
    const status=err.status||500
    if (err.code === 11000){
        res.status(400).json({
            "oops ! our server tripped":`email ${err.keyValue.email} already exists`,
            "status":400
        })
        
    }else{
    res.status(status).json({
        "oops ! our server tripped":err.message,
        "status":status 
        })
    }
})
app.listen(4000,()=>{
    console.log("running at port 4000")
})