const express = require("express");
require("dotenv").config();
const router = express.Router();
const app = express();
const main_routes = require("./routes/main_routes");
const path = require("path");

app.set("view-engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT, () => {
  console.log("Server Çalışmaya Başladı");
});

app.use("/", main_routes);
