const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/user.js");
const productRoute = require("./routes/product.js");
const cartRoute = require("./routes/cart.js");
const orderRoute = require("./routes/order.js");
const stripeRoute = require("./routes/stripe.js");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

// app.get("/api/test", () => {
//   console.log("API test!");
// });
app.use(cors());
app.use(express.json()); // Allow to receive JSON file
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening");
  console.log(Date());
});
