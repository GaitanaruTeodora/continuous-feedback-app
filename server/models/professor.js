const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");


const Professor = sequelize.define(
    "Professor",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nume: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prenume: {
            type: DataTypes.STRING,
        },
        materie: {
            type: DataTypes.STRING,
            allowNull: false,
        },
               
    }
);
module.exports = Professor;