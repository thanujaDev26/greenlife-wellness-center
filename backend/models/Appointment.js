const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


  const Appointment = sequelize.define("Appointment", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    doctorName: { type: DataTypes.STRING, allowNull: false },
    sessionType: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATEONLY, allowNull: false },
    time: { type: DataTypes.STRING, allowNull: false },
    hospital: { type: DataTypes.STRING, allowNull: false },
    status: {
      type: DataTypes.ENUM("Pending", "Confirmed", "Cancelled"),
      defaultValue: "Pending",
    },
  });

  module.exports = Appointment;

