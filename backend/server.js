const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({debug:true,encoding:'UTF-8'});

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/companies',(req,res) =>{
    res.send("hello world");
});

app.listen(process.env.PORT,() =>{
    console.log(`http://locahost:${process.env.PORT}`)
})