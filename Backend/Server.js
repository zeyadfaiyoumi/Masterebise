const express = require("express");
const mongoose = require("./Config//config");
const products = require("./Models/product");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

const users = require("./Routes/userroutes");
const product = require("./Routes/productRouts");
app.use("/api/zos", users);
app.use("/api/zos", product);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
