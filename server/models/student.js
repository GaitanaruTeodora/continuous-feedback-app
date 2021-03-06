const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Student = sequelize.define(
    "Student",
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
        grupa: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        parola: {
            type: DataTypes.STRING,
            allowNull: false,
        },
               
    }
);
module.exports = Student;