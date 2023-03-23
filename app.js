const express = require("express");
const mongoose = require("mongoose");
const CORS = require("cors");
const productsRoutes = require("./route/product");
const app = express();
app.use(CORS());

app.use(express.json());

app.use(CORS(), productsRoutes);

const db =
  "mongodb+srv://myApp:myApp@myapp.wpqx1bi.mongodb.net/todosss?retryWrites=true&w=majority";

mongoose
  .connect(db)
  .then(() => {
    app.listen(3100, () => {
      console.log("Connected to port 3100");
    });
  })
  .catch((err) => {
    console.log("Error", err.message);
  });
