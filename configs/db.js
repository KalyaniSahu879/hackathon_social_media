const mongoose=require("mongoose")
require('dotenv').config()

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected at ${conn.connection.host}`)

    }catch(err){
        console.log(err)
    }
}

module.exports=connectDB