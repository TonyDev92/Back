const mongoose = require('mongoose');

const animalesSchema = new mongoose.Schema({
  datos: {
    nombre: { type: String, required: true },
    especie: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    sexo: { type: String, enum: ['Macho', 'Hembra'], required: true },
    tamaño: { type: String, required: true },
    peso: { type: Number, required: true },
    personalidad: { type: String, required: true },
    historia: { type: String, required: true }
    // imagen: {type:String,required:false} PENDIENTE!!!
  },
  salud: {
    vacunado: { type: Boolean, required: true },
    desparasitado: { type: Boolean, required: true },
    sano: { type: Boolean, required: true },
    esterilizado: { type: Boolean, required: true },
    identificado: { type: Boolean, required: true },
    microchip: { type: Boolean, required: true },
  },
  adopcion: {
    requisitos: { type: String, required: true },
    tasaAdopcion: { type: Number, required: true },
    envioOtraCiudad: { type: Boolean, required: true },
  },
});

const Animales = mongoose.model('Animales', animalesSchema, 'animales');

module.exports = Animales;