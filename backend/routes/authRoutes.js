const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');


router.post('/register/patient', authController.registerPatient);
router.post('/register/therapist', authController.registerTherapist);
router.post('/register/admin', authController.registerAdmin); 


router.post('/login', authController.login);


router.get('/me', verifyToken, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
