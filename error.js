const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/errortest",(req,res,next)=>{
  const err = new Error("manual eroor")
  err.status=400
  next(err)
})
app.use((req,res,next)=>{
    const err = new Error("route not found")
    err.status =401;
    next(err)
})
app.use((err,req,res,next)=>{
    const status = err.status || 500
    console.log(`Error ${status} : {err.message}`)
    res.status(status).json({
        success:false,
        message:err.message,
    })
})
app.listen(5000,()=>{
    console.log("running at port 5000")
})