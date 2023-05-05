const express = require('express');
const { loginUser , userRegister} = require('../controllers/usercontroller');
const router = express.Router();

router.post('/login', loginUser );
router.post('/register', userRegister);

module.exports = router;
