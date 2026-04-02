const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/vault/:passsword",(req,res,next)=>{
    const password = req.params.passsword
    if (password === "1234"){
        res.send("welcome to the vault")
    }

    if (password === "abcd"){
        const err = new Error("you are not allowed to enter the vault")
        err.status = 403
        next(err)
    }
   next()
})
app.use((req,res,next)=>{
    const err = new Error("route not found")
    err.status = 401;
    next(err)
})
app.use((err,req,res,next)=>{
    const status = err.status || 500
    res.status(status).json({
        "oops ! our server tripped":err.message,
        "status":status
    })
    console.log(`Error ${status} :  ${err.message}`)
})
app.listen(3000,()=>{
    console.log("running at port 3000")
})