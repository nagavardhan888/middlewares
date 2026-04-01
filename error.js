const express = require('express')
const app = express()

app.get("/bankbalance",(req,res,next)=>{
    const isserverdown = true;
    if(isserverdown){
        const myerr = new Error("data is not working")
        myerr.status=500;
        return next(myerr)
    }
    res.send("you  hav 1000 bank balance")

})
app.use((err,req,res,next)=>{
    const status = err.statuscode || 500;
    res.status(status).send(`Error Alert: ${err.message}`);
})

app.listen(5000,()=>{
    console.log("running at port 5000")
})