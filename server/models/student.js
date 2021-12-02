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
               
    }
);
module.exports = Student;