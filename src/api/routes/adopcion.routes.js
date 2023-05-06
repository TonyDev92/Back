const express = require('express');
const adopcionController = require('../controllers/adopcion.controller');

const router = express.Router();

router.post('/adopciones', adopcionController.createAdopcion);

module.exports = router;