const express    = require('express');
const router     = express.Router();
const { login, register } = require('../controllers/authController');

router.post('/login', login);
router.post('/users', register);

module.exports = router;
