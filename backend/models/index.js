const sequelize = require('../config/database');
const User = require('./User')
const PatientDetail = require('./PatientDetail');
const Appointment = require('./Appointment')


User.hasOne(PatientDetail, { foreignKey: 'userId' });
PatientDetail.belongsTo(User, { foreignKey: 'userId' });

Appointment.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Appointment, { foreignKey: "userId" }); 


module.exports = {
  sequelize,
  User,
  PatientDetail,
  Appointment
};
