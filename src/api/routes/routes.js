const express = require('express');
const { loginUser, userRegister, updateUserImage, multerUpload } = require('../controllers/usercontroller');
const upload = require('../../middleware/upload');
const router = express.Router();

router.post('/login', loginUser);
router.post('/register', userRegister);
router.put('/update/:id',  upload.single('imagen'),  updateUserImage); // agregado

module.exports = router;
