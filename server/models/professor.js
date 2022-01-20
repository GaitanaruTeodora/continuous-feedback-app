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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
        parola: {
            type: DataTypes.STRING,
            allowNull: false,
        },
               
    }
);
module.exports = Professor;