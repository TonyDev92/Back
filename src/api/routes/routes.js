const express = require('express');
const { loginUser, userRegister, updateUserImage } = require('../controllers/usercontroller');
const router = express.Router();

router.post('/login', loginUser);
router.post('/register', userRegister);
router.put('/users/:id', updateUserImage); // agregado

module.exports = router;
