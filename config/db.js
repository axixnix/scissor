const mongoose = require("mongoose")
const config = require("config")
const db = config.get("mongoURI")

const connectDB = async ()=>{
    try{
        await mongoose.connect(db,{
          //  maxPoolSize:50,
        //wtimeoutMS:2500,
        useNewUrlParser:true
        })

        console.log("mongodb connected...")
    }
catch(err){
    console.error(err.message)
    process.exit(1)
}}


module.exports = connectDB