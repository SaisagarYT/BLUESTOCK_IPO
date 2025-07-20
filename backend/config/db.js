const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        const connect = await mongoose.connect('mongodb://localhost:27017/sample');
        console.log("Connected",connect.connection.host)
    }
    catch(err){
        console.log("Not connected");
    }
}

module.exports = connectDB;