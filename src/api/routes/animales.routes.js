const express = require('express');
const router = express.Router();
const animalesController = require('../controllers/animales.controller');

router.get('/', animalesController.getAnimales);
router.get('/:id', animalesController.getAnimalById);
router.post('/', animalesController.postAnimal);
router.put('/:id', animalesController.putAnimal);
router.delete('/:id', animalesController.deleteAnimal);

module.exports = router;