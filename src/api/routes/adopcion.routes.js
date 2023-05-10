const express = require('express');
const adopcionController = require('../controllers/adopcion.controller');
const { isAuth } = require("../../middleware/auth");


const router = express.Router();

router.post('/', [isAuth],adopcionController.postAdopcion);

module.exports = router;