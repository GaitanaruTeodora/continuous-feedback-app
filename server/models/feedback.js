const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Feedback = sequelize.define(
    "Feedback",
    {
        idFeedback: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idActivitate: {
            type: DataTypes.INTEGER,
            required:true,
            allowNull:false,
            
        },
        timp: {
            type: DataTypes.STRING,
            required:true,
            allowNull:false,
            
        },
        emoji: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    }
);
module.exports = Feedback;