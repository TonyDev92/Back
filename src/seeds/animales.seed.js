const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Animales = require('../api/models/animales.model');

const arrayAnimales = [
  {
    datos:{
    nombre: "Julius",
    especie: "Perro",
    fechaNacimiento: "2018-04-10",
    sexo: "Macho",
    tamaño: "Mediano",
    peso: 15,
    personalidad: "Juguetón",
    historia: "Fue rescatado de la calle y necesita un hogar amoroso."
    },
    salud: {
      vacunado: true,
      desparasitado: true,
      sano: true,
      esterilizado: false,
      identificado: true,
      microchip: true,
    },
    adopcion: {
      requisitos: "Necesita un hogar con un patio grande y sin niños pequeños.",
      tasaAdopcion: 50,
      envioOtraCiudad: true
    }
  },
  {
    datos:{
    nombre: "Flora",
    especie: "Gato",
    fechaNacimiento: "2020-02-15",
    sexo: "Hembra",
    tamaño: "Pequeño",
    peso: 5,
    personalidad: "Cariñoso",
    historia: "Fue abandonado por su familia anterior y necesita un nuevo hogar."},
    salud: {
      vacunado: true,
      desparasitado: true,
      sano: true,
      esterilizado: true,
      identificado: true,
      microchip: true,
    },
    adopcion: {
      requisitos: "Necesita un hogar sin perros.",
      tasaAdopcion: 75,
      envioOtraCiudad: false
    }
  },
  {
    datos:{
    nombre: "Tronco",
    especie: 'Perro',
    fechaNacimiento: '2017-04-15',
    sexo: 'Macho',
    tamaño: 'Grande',
    peso: 30,
    personalidad: 'Juguetón, cariñoso y muy activo',
    historia: 'Fue rescatado de la calle y necesita un hogar amoroso y activo que pueda proporcionarle mucho ejercicio y atención.'},
    salud: {
      vacunado: true,
      desparasitado: true,
      sano: true,
      esterilizado: true,
      identificado: true,
      microchip: true
    },
    adopcion: {
      requisitos: 'Debe tener un patio grande y cercado para que pueda correr y jugar, y preferiblemente tener experiencia previa en la tenencia de perros activos y grandes.',
      tasaAdopcion: 200,
      envioOtraCiudad: true
    }
  },
  {
    datos:{
    nombre: "Calcetines",
    especie: 'Gato',
    fechaNacimiento: '2019-08-10',
    sexo: 'Hembra',
    tamaño: 'Mediano',
    peso: 4,
    personalidad: 'Tímido al principio pero se vuelve muy cariñoso y juguetón con el tiempo',
    historia: 'Fue abandonado junto con su camada y necesita un hogar amoroso y paciente que le dé tiempo para adaptarse.'},
    salud: {
      vacunado: true,
      desparasitado: true,
      sano: true,
      esterilizado: true,
      identificado: true,
      microchip: false
    },
    adopcion: {
      requisitos: 'Debe ser adoptado por alguien que tenga experiencia previa en la tenencia de gatos y pueda proporcionarle un hogar tranquilo y seguro.',
      tasaAdopcion: 100,
      envioOtraCiudad: false
    }
  }
];

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    const allAnimales = await Animales.find();
    if (allAnimales.length) {
      await Animales.collection.drop();
      console.log("Animales eliminados");
    }
  })
  .catch((err) => console.log("Error eliminando animales", err))
  .then(async () => {
    const animalesMap = arrayAnimales.map((animal) => new Animales(animal));
    await Animales.insertMany(animalesMap);
    console.log("Animales creados");
  })
  .catch((err) => console.log("Error creando animales", err))
  .finally(() => mongoose.disconnect());