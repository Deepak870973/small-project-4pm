// config/db.js
const mongoose = require("mongoose");
require ('dotenv').config()

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb is connected");
    }catch(err){
        console.log("Something issue with connection:", err.message);
        process.exit(1);    //stop the server immediately, "0" is success, "1" is failure
    }  
}
module.exports=connectDB;