const { createcart } = require("../DB Collections/Cartops");
const { User } = require("../Models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const signin=async(req,res)=>{
    try{
         let token;
         var email=req.body.email;
         var password=req.body.password;

         const result=await User.findOne({email});

         if(result){
            const isMatch=await bcrypt.compare(password,result.password);
             if(isMatch){
                 token=await result.generateAuthToken();
                 res.cookie("jwtoken",token,{
                     httpOnly:true
                 });
                 res.status(200).send({message:"signed in successfully!!"});
             }
             else{
                 res.status(400).send({message:"Invalid Credentials!!"});
             }
         }
    }   
    catch(err){
        res.status(400).send(err);
    } 
}


const createuser = async (req, res) => {
    try {
        var user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            contact: req.body.contact,
            street: req.body.street,
            city: req.body.city, 
            state: req.body.state,
        });
        createcart(req.body.email);
        const result = await user.save();
        res.status(201).send("created");
    }
    catch (err) {
        res.status(400).send(err);
    }
}

const getuser = async (req, res) => {
    try {
        const email = req.params.email;
        const result = await User.find({ email });
        res.status(200).send(result);
    }
    catch (err) {
        
        res.status(500).send(err);
    }
}


const updateuser = async (req, res) => {
    try {
        const email = req.params.email;
        var result = await User.updateOne({ email }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                contact: req.body.contact,
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
            }
        });
        res.status(201).send("Updated");
    }
    catch (err) {
        res.status(400).send(err);
    }
}

module.exports = {
    createuser,
    updateuser,
    getuser,
    signin
};