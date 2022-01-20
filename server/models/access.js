const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");


const Access = sequelize.define(
    "Access",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        grupa: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cod: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nume: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        materie: {
            type: DataTypes.STRING,
            allowNull: false,
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
        idActivitate: {
            type: DataTypes.INTEGER,
            required:true,
            allowNull:false,
            
        },
       
    }
);

module.exports = Access;