const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const shopSchema = new Schema({
  shopName: String,
  city: String,
  locationURL: String,
});

const Shop = model("Shop", shopSchema);
module.exports = Shop;
