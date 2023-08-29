const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoutes");

//configure env
dotenv.config();

//databse config
connectDB();

const app = express();
app.use(express.json());

app.use("/auth", authRoute);
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});