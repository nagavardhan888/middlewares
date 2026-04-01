const express = require('express')
const app = express()

// The presence of that fourth argument tells Express: "Hey, only run this function if something went wrong earlier in the chain."
app.use((err,req,res,next)=>{
    console.error(err)
    res.status(500).send("something broke")
})
app.get("/profile",(req,res)=>{
    const user = db.findById()
    if(!user){
        const error = new Error("user not found")
        error.status = 400
        return next(error)
    }
    res.send(user)
}) 

app.listen(5000,()=>{
    console.log("running at port 5000")
})