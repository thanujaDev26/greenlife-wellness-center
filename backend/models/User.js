const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fullName: { type: DataTypes.STRING, allowNull: true }, 
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: true },
  role: { 
    type: DataTypes.ENUM('patient','therapist','admin'),
    allowNull: false,
    defaultValue: 'patient'
  }
}, {
  tableName: 'users',
  timestamps: true
});

module.exports = User;
