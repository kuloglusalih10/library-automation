const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
    }
})
