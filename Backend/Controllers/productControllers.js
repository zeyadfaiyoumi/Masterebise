const product = require("../Models/product");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
exports.getData = async (req, res) => {
  try {
    const Products = await product.find();
    res.status(200).json(Products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

