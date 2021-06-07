const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const users = require("./data/users");
const products = require("./data/products");
const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUser = await User.insertMany(users);

    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log(colors.green.inverse("Data imported!"));
    process.exit();
  } catch (error) {
    console.error(colors.red.inverse(`${error}`));
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log(colors.red.inverse("Data destroyed!"));
    process.exit();
  } catch (error) {
    console.error(colors.red.inverse(`${error}`));
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
