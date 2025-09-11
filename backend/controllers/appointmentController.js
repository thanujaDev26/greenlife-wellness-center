const { Model } = require("sequelize");
const { Appointment, User } = require("../models");


exports.createAppointment = async (req, res) => {
  try {
    const { userId, doctorName, sessionType, date, time, hospital, status } = req.body;

    const appointment = await Appointment.create({
      userId,
      doctorName,
      sessionType,
      date,
      time,
      hospital,
      status,
      patientId: req.user.id, 
    });

    res.status(201).json({ message: "Appointment created successfully", appointment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.editAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    let appointment = await Appointment.findByPk(id);
    if (!appointment) return res.status(404).json({ error: "Appointment not found" });

    if (appointment.patientId !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ error: "Unauthorized" });
    }

    await appointment.update(updates);
    res.json({ message: "Appointment updated", appointment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findByPk(id);
    if (!appointment) return res.status(404).json({ error: "Appointment not found" });

    if (appointment.patientId !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ error: "Unauthorized" });
    }

    await appointment.destroy();
    res.json({ message: "Appointment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getAppointments = async (req, res) => {
  try {
    let appointments;

    if (req.user.role === "admin") {
      appointments = await Appointment.findAll();
    } else if (req.user.role === "patient") {
      appointments = await Appointment.findAll({
        where: { userId: req.user.id },
      });
    } else if (req.user.role === "therapist") {
      appointments = await Appointment.findAll({
        where: { userId: req.user.id }, 
      });
    } else {
      return res.status(403).json({ error: "Unauthorized role" });
    }

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

