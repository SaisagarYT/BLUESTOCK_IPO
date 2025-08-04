const Admin = require('../models/admin.models');

const signupAdmin = async(req,res) =>{
    const {email,password} = req.body;
    try{
        if(email === "" || password === ""){
            return res.status(400).json({message:"Enter the required credentials!"});
        }
        const isAdminExist = Admin.findOne({email});
        if(isAdminExist){
            return res.status(400).json({message:"The Admin already exists!"});
        }
        const newAdmin = await Admin.create({
            email:email,
            password:password
        });
        return res.status(200).json({message:"Admin successfully logged in"});
    }
    catch(err){
        return res.status(500).json({message:"Internal server error"});
    }
}

const signinAdmin = async(req,res) =>{
    const {email,password} = req.body;
    try{
        const isAdminExist = await Admin.findOne({email});
        if(!isAdminExist){
            return res.status(400).json({message:"User not exsits"});
        }
        if(email === "" || password === ""){
            return res.status(400).json({message:"Enter the required user credentials"});
        }
        if(isAdminExist.password === password){
            return res.status(200).json({message:"User successfully logged in"});
        }
    }
    catch(err){
        return res.status(500).json({message:"Internal server error"});
    }
}

module.exports = {signupAdmin,signinAdmin}