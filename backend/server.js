const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res) =>{
    res.send("Hello world")
});

connectDB()
const Person = mongoose.model('Person',{
    name:String,
    password:String,
})

app.post('/api/login',async(req,res) =>{
    const {name,password} = req.body;
    try{
        const isExist = await Person.findOne({name:name});
        if(!isExist){
            const newPerson = new Person({
                name:name,
                password:password
            });
            newPerson.save();
            res.status(200).json({message:"inserted successfully"});
        }
        else{
            res.status(200).json({message:"Already exist"});
        }
    }
    catch(err){
        return res.status(500).json({error:"Internal server error"});
    }
})

app.listen(4000,() =>{
    console.log("http://localhost:4000");
})