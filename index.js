const express =require("express");
const cors = require("cors")

const app=express();
const mongoose= require("mongoose");
const dotenv=require("dotenv");
const helmet =require("helmet");

const port = process.env.PORT || 8080


//all routers
const userRouter = require("./routes/users")
const authRouter=require("./routes/auth");
const postRouter=require("./routes/posts");

 
dotenv.config();

const connectDB=require("./configs/db")
connectDB()

// mongoose.connect(process.env.MONGO_URL,()=>{
//     console.log("db connected")
// });

//middleware
 app.use(express.json());
 app.use(helmet());
 app.use(cors());


 app.use("/api/users", userRouter)
 app.use("/api/auth", authRouter)
 app.use("/api/posts", postRouter)
 

app.get("/", (req,res)=>{
    res.send("welcome to home Page")
})



app.listen(port,()=>{
    console.log("Beckend server is running!")
})