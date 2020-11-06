const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const cityRoutes = require("./routes/cityRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

dotenv.config();

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (error) => {
    if (error) return console.log(error);
    console.log("DB connected");
  }
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/V1/accounts", userRoutes);
app.use("/api/V1/categories", categoryRoutes);
app.use("/api/V1/cities", cityRoutes);
app.use("/api/V1/products", itemRoutes);

app.listen(8000, () => {
  console.log("Server is up and running!");
});
