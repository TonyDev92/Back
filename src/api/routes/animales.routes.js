const express = require('express');
const animalesController = require('../controllers/animales.controller');
const upload = require('../../middleware/upload');
const router = express.Router();


router.get('/', animalesController.getAnimales);
router.get('/:id', animalesController.getAnimalById);
router.post('/', upload.single('imagen'), animalesController.postAnimal);
router.put('/:id', animalesController.putAnimal);
router.delete('/:id', animalesController.deleteAnimal);

module.exports = router;