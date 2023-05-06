const Adopcion = require('../models/adopciones.model');

exports.createAdopcion = async (req, res) => {
  try {
    const adopcion = new Adopcion({
      Datos: req.body.Datos,
      Mascota: req.body.Mascota,
      FamiliaHogar: req.body.FamiliaHogar
    });
    const result = await adopcion.save();
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear la adopción.' });
  }
};