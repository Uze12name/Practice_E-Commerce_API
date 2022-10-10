const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String, require: true },
    catagories: { type: Array },
    img: { type: String, require: true },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, require: true },
    inStack: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
