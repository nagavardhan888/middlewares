const express  = require('express')
const app = express()
const expresserror = require("./expresserror")
app.use((req,res,next)=>{
    console.log("middle ware is running")
    console.log(req.method)
    next()
})
const checktoken = (req,res,next)=>{
    let {token} = req.query;
    if (token == "give acces"){
        next()
    }else{
        res.send("Access denied")
    }
}
app.get("/api",checktoken,(req,res)=>{
    res.send("data")
})
app.get("/",(req,res)=>{
    res.send("app was running at main page")
})

app.get("/random",(req,res)=>{
    res.send("random info there ")
})
app.get("/err",(req,res)=>{
    abcd = abcd
})
app.get("/admin",(req,res)=>{
    throw new expresserror(403,"Acess to admmin is  forbideen")
})
app.use((err,req,res,next)=>{
let {status , message="some error occured"}= err
res.status(status).send(message)
})

app.listen(3000,()=>{
    console.log("running at 3000")
})