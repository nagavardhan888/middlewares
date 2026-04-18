const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    timestamp:{
         type:Date,
        default:Date.now
    }
})
const users =  mongoose.model("user",userSchema)
module.exports =users