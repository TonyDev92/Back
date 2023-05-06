const express = require('express');


const {getProtectora , protectoraRegister , putProtectora} = require('../controllers/protectoracontroller');
const router = express.Router();

router.get('/' , getProtectora);
router.post('/' , protectoraRegister);
router.put('/:id' , putProtectora);

module.exports = router;

//AJENFHJABDSFKAJDScda