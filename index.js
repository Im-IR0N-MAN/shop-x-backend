const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require("./config/db");

//configure env
dotenv.config();

//databse config
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});