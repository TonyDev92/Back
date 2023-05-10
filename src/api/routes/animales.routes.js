// const express = require('express');
// const animalesController = require('../controllers/animales.controller');
// const upload = require('../../middleware/upload');
// const router = express.Router();
// const { isAuth } = require("rutasecurizador");

// router.get('/', animalesController.getAnimales);
// router.get('/:id', animalesController.getAnimalById);
// router.post('/',  upload.single('imagen'), animalesController.postAnimal);
// router.put('/:id', animalesController.putAnimal);
// router.delete('/:id', animalesController.deleteAnimal);

// module.exports = router;

const express = require('express');
const animalesController = require('../controllers/animales.controller');
const upload = require('../../middleware/upload');
const router = express.Router();
const { isAuth } = require("../../middleware/auth");

router.get('/', animalesController.getAnimales);
router.get('/:id', animalesController.getAnimalById);
router.post('/', [isAuth], upload.single('imagen'), animalesController.postAnimal);
router.put('/:id', [isAuth], animalesController.putAnimal);
router.delete('/:id', [isAuth], animalesController.deleteAnimal);

module.exports = router;