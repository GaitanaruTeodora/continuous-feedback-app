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
            type: DataTypes.STRING,
            allowNull: false,
        },
        durata: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        oraIncepere: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        codAcces: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        idProfessor:{
            type:DataTypes.STRING,
        }, 
    }
);

module.exports = Activity;