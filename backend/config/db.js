const colors = require("colors");

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(
      colors.cyan.underline(`MongoDB connected: ${conn.connection.host}`)
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline);
    process.exit(1);
  }
};

module.exports = connectDB;
