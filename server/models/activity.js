const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");


const Activity = sequelize.define(
    "Activity",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        denumire: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descriere: {
            type: DataTypes.STRING,
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        durata: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        oraIncepere: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        codAcces: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
    }
);

module.exports = Activity;