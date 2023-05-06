const mongoose = require("mongoose");

const adopcionesSchema = new mongoose.Schema({
  Datos: {
    NombreApellidos: {type: String,required: true},
    Email: {type: String,required: true,unique: true},
    Telefono: {type: String,required: true},
    DNI: {type: String,required: true,unique: true},
    CalleNumeroPiso: {type: String,required: true},
    CodigoPostal: {type: String,required: true},
    Ciudad: {type: String,required: true},
    Usuario:{type:mongoose.Types.ObjectId,ref: 'Animales'}
  },
  Mascota: {
    OtrosAnimales: {type: Boolean,required: true},
    CualesAnimales: {type: String},
    SeLlevaBien: {type: String},
    PorQueAdoptar: {type: String},
    NecesidadesAnimal: {type: String},
    Gastos: {type: String},
    Alimentacion: {type: String},
    Animales : {type: mongoose.Types.ObjectId, ref: 'Animales'}
  },
  FamiliaHogar: {
    DondeVives: {type: String,required: true},
    Alquiler: {type: Boolean,required: true},
    CaseroAnimales: {type: Boolean,required: true},
    MudartePronto: {type: Boolean,required: true},
    Jardin: {type: Boolean,required: true},
    OtrasPersonas: {type: Boolean,required: true},
    TodosDeAcuerdo: {type: Boolean,required: true},
    VisitarCasa: {type: Boolean,required: true},
  },
});

const Adopcion = mongoose.model("Adopcion", adopcionesSchema);

module.exports = Adopcion;
