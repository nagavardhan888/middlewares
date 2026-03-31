const express  = require('express')
const app = express()
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
app.listen(3000,()=>{
    console.log("running at 3000")
})