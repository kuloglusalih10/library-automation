const express = require("express");
require("dotenv").config();
const router = express.Router();
const app = express();
const main_routes = require("./routes/main_routes");

app.set("view-engine", "ejs");

app.listen(process.env.PORT, () => {
  console.log("Server Çalışmaya Başladı");
});

app.use("/", main_routes);
