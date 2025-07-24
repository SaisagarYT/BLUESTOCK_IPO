const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const ipoRoute = require('./routes/ipo.route');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/companies',ipoRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log("http://localhost:5000");
})