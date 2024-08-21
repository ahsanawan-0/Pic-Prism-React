const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require('./dbConnection');
const cors = require('cors');
connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const port = process.env.PORT;
const { readdirSync } = require("fs");
readdirSync("./Router").map((route) => {
  app.use("/api", require(`./Router/${route}`));
});
app.listen(port, () => {
  console.log(`"server  is listening on a ${port}`);
});
