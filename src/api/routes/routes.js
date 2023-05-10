const express = require('express');
const { loginUser, userRegister, updateUserImage, multerUpload } = require('../controllers/usercontroller');
const router = express.Router();

router.post('/login', loginUser);
router.post('/register', userRegister);
router.put('/:id/image', multerUpload.single('image'), updateUserImage); // agregado

module.exports = router;
