const express = require('express');
const app = express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("home page")
})
app.post("/email",(req,res,next)=>{
    const email = req.body.email;
    if(!email){
        const err = new Error("email is required")
        err.status= 400
         return next(err)
    }
    res.send(`email ${email} received successfully`)
})
app.use((req,res,next)=>{
    const err = new Error("route not found")
    err.status = 401;
    next(err)
})
app.use((err,req,res,next)=>{
    const status = err.status || 500
    const time = new Date().toISOString();
    res.status(status).json({
        "oops ! our server tripped":err.message,
        "status":status,
        "timestamp":time
    })
    console.log(`Error ${status} :  ${err.message}`)    
    })
app.listen(8080,()=>{
    console.log("running at port 5000")
})