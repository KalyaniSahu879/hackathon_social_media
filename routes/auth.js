const router = require("express").Router();
const User=require("../models/User")
const bcrypt=require("bcrypt");
//REGISTER


router.post("/register",async (req,res)=>{
    try{
        //genrate new password
        const salt= await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(req.body.password,salt);

        //create new user
        req.body.password=hashedPassword;
        const user =await User.create(req.body)

        //sava us
        res.status(201).send(user)

    }
    catch(err){
        res.status(500).json(err)
    }
})


//LOGIN

router.post("/login", async(req,res)=>{
    try{
        const user= await User.findOne({email:req.body.email});
        !user && res.status(404).send("user not found")

        const validPassword= await bcrypt.compare(req.body.password,user.password)
        !validPassword && res.status(400).json("wrong password")

        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports=router;