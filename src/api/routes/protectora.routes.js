const express = require('express');
const upload = require('../../middleware/upload');


const {getProtectora , protectoraRegister , putProtectora} = require('../controllers/protectoracontroller');
const router = express.Router();

router.get('/' , getProtectora);
router.post('/' ,upload.single('image'), protectoraRegister);
router.put('/:id' , putProtectora);

module.exports = router;


