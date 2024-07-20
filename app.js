const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.json());

var morgan = require("morgan");

app.use(morgan("tiny"));

const shopRoute = require("./routes/shop-route");
app.use("/api/shop", shopRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//localhost:27017/UserAppDB
mongodb: mongoose.connect("mongodb://localhost:27017/favshopDB");
