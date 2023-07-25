const express = require("express");
require("dotenv").config();
const router = express.Router();
const app = express();
const main_routes = require("./routes/main_routes");
const path = require("path");
const mysql = require("mysql2");
const localtunnel = require("localtunnel");
const sequelize = require('./data/db');

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist")));
app.use(express.static(path.join(__dirname, "public")));


(async () => {

   const tunnel = await localtunnel({ port: 3000 });
   console.log(tunnel.url);
   }
)();

app.listen(process.env.PORT, () => {
  console.log("Server Çalışmaya Başladı");
});

app.use("/", main_routes);
