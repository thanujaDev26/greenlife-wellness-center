const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const PatientDetail = sequelize.define('PatientDetail', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  emergencyContactNumber: { type: DataTypes.STRING, allowNull: true },
  emergencyContactName: { type: DataTypes.STRING, allowNull: true },
  relationshipToPatient: { type: DataTypes.STRING, allowNull: true }
}, {
  tableName: 'patient_details',
  timestamps: true
});

PatientDetail.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasOne(PatientDetail, { foreignKey: 'userId' });

module.exports = PatientDetail;
