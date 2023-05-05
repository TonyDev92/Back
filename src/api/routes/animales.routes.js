const express = require('express');
const router = express.Router();
const animalesController = require('../controllers/animales.controller');

router.get('/', animalesController.obtenerAnimales);
router.get('/:id', animalesController.obtenerAnimalPorId);
router.post('/', animalesController.crearAnimal);
router.put('/:id', animalesController.actualizarAnimal);
router.delete('/:id', animalesController.eliminarAnimal);

module.exports = router;