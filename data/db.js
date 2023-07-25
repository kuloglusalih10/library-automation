require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DBDB,process.env.DBUSER, process.env.DBPASS, {dialect: "mysql",
host: process.env.DBHOST,});


async function connect() {
    try {
      await sequelize.authenticate();
      console.log("mysql server bağlantısı yapıldı");
    } catch (err) {
      console.log("bağlantı hatası ", err);
    }
}
  
connect();
  
module.exports = sequelize;

