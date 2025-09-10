const sequelize = require('../config/database');
const User = require('./User');
const PatientDetail = require('./PatientDetail');

User.hasOne(PatientDetail, { foreignKey: 'userId' });
PatientDetail.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  PatientDetail
};
