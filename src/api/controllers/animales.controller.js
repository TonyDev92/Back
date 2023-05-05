const Animales = require('../models/animales.model');

// OBTENER ANIMALES
exports.getAnimales = async (req, res) => {
  try {
    const animales = await Animales.find();
    res.status(200).json(animales);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los animales', error });
  }
};

// OBTENER ANIMAPL POR ID
exports.getAnimalById = async (req, res) => {
  try {
    const animal = await Animales.findById(req.params.id);
    if (!animal) {
      res.status(404).json({ mensaje: 'El animal no existe' });
      return;
    }
    res.status(200).json(animal);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el animal', error });
  }
};

// CREAR ANIMAL
exports.postAnimal = async (req, res) => {
  try {
    const animal = new Animales(req.body);
    const animalCreado = await animal.save();
    res.status(201).json(animalCreado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el animal', error });
  }
};

// MODIFICAR ANIMAL 
exports.putAnimal = async (req, res) => {
  try {
    const animalActualizado = await Animales.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!animalActualizado) {
      res.status(404).json({ mensaje: 'El animal no existe' });
      return;
    }
    res.status(200).json(animalActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el animal', error });
  }
};

// BORRAR ANIMAL
exports.deleteAnimal = async (req, res) => {
  try {
    const animalEliminado = await Animales.findByIdAndRemove(req.params.id);
    if (!animalEliminado) {
      res.status(404).json({ mensaje: 'El animal no existe' });
      return;
    }
    res.status(200).json({ mensaje: 'Animal eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el animal', error });
  }
};