const express  = require('express')
const app = express()
app.use((req,res,next)=>{
    console.log("middle ware is running")
    next()
})
app.listen(3000,()=>{
    console.log("running at 3000")
})