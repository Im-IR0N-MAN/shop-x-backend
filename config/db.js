const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`Connected To Mongodb Database.`);
  } catch (error) {
    console.log(`Error while connecting to Mongodb... ${error}`);
  }
};

module.exports = connectDB;
