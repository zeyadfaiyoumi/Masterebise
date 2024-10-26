const express = require("express");
const mongoose = require("./Config//config");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
const Stripe = require("stripe");
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
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const path = require("path");
const users = require("./Routes/userroutes");
const product = require("./Routes/productRouts");
const Favorite = require("./Routes/Favorite");
const ContactUs = require("./Routes/ContactUs");
const Order = require("./Routes/Order ");
const DASUser = require("./Routes/DASUser");
const payment = require("./Routes/payment");
const Dashproduct = require("./Routes/DASHproduct");
const DASHContact = require("./Routes/DASHContact ");
app.use("/api/zos", users);
app.use("/api/zos", product);
app.use("/api/zos", Favorite);
app.use("/api/zos", ContactUs);
app.use("/api/zos", Order);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/zos", DASUser);
app.use("/api/zos", payment);
app.use("/api/zos", Dashproduct);
app.use("/api/zos", DASHContact);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
