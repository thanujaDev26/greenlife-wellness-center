const express = require("express");
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const appointmentController = require("../controllers/appointmentController");

router.post("/", verifyToken, appointmentController.createAppointment);
router.put("/:id", verifyToken, appointmentController.editAppointment);
router.delete("/:id", verifyToken, appointmentController.deleteAppointment);
router.get("/",verifyToken, appointmentController.getAppointments);

module.exports = router;
