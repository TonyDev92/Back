const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Animales = require('../api/models/animales.model');

const arrayAnimales = [
  {
    "datos": {
      "nombre": "Garfield",
      "especie": "Felino",
      "fechaNacimiento": "2019-04-01",
      "sexo": "Macho",
      "tamaño": "Pequeño",
      "peso": 4.2,
      "personalidad": "Perezoso y cariñoso",
      "historia": "Fue rescatado de la calle y busca un hogar amoroso",
      "imagen": "https://res.cloudinary.com/dpekebzbd/image/upload/v1683535678/Lucky/gato_egipcio_hv44yw.png"
    },
    "salud": {
      "vacunado": true,
      "desparasitado": true,
      "sano": true,
      "esterilizado": true,
      "identificado": true,
      "microchip": true
    },
    "adopcion": {
      "requisitos": "Se requiere hogar sin otros gatos y con experiencia en cuidado de gatos",
      "tasaAdopcion": 100,
      "envioOtraCiudad": false
    }
  },
  {
    "datos": {
      "nombre": "Luna",
      "especie": "Felino",
      "fechaNacimiento": "2020-09-15",
      "sexo": "Hembra",
      "tamaño": "Pequeño",
      "peso": 3.5,
      "personalidad": "Juguetona y curiosa",
      "historia": "Fue abandonada junto a sus hermanos y busca un hogar amoroso",
      "imagen": "https://res.cloudinary.com/dpekebzbd/image/upload/v1683535614/Lucky/2Q_nmu8ar.png"
    },
    "salud": {
      "vacunado": true,
      "desparasitado": true,
      "sano": true,
      "esterilizado": false,
      "identificado": false,
      "microchip": false
    },
    "adopcion": {
      "requisitos": "Se requiere hogar con experiencia en cuidado de gatos y dispuesto a esterilizarla",
      "tasaAdopcion": 50,
      "envioOtraCiudad": true
    }
  },
  {
    "datos": {
      "nombre": "Max",
      "especie": "Canino",
      "fechaNacimiento": "2018-01-10",
      "sexo": "Macho",
      "tamaño": "Mediano",
      "peso": 12.7,
      "personalidad": "Leal y protector",
      "historia": "Fue rescatado de un hogar abusivo y busca un hogar amoroso",
      "imagen": "https://res.cloudinary.com/dpekebzbd/image/upload/v1683535695/Lucky/husky_cwdg0f.png"
    },
    "salud": {
      "vacunado": true,
      "desparasitado": true,
      "sano": true,
      "esterilizado": true,
      "identificado": true,
      "microchip": true
    },
    "adopcion": {
      "requisitos": "Se requieren conocimientos de veterinaria básicos",
      "tasaAdopcion": 100,
      "envioOtraCiudad": false
    }
  },        
  {
    "datos": {
      "nombre": "Kaa",
      "especie": "Serpiente",
      "fechaNacimiento": "2019-10-05",
      "sexo": "Hembra",
      "tamaño": "Pequeño",
      "peso": 0.5,
      "personalidad": "Tranquila y observadora",
      "historia": "Fue rescatada de un hogar donde no la cuidaban adecuadamente y busca un hogar amoroso",
      "imagen": "https://res.cloudinary.com/dpekebzbd/image/upload/v1683535727/Lucky/serpiente_dan0ui.png"
    },
    "salud": {
      "vacunado": false,
      "desparasitado": false,
      "sano": true,
      "esterilizado": false,
      "identificado": false,
      "microchip": false
    },
    "adopcion": {
      "requisitos": "Se requiere hogar con experiencia en cuidado de serpientes y dispuesto a proveerle un ambiente adecuado",
      "tasaAdopcion": 50,
      "envioOtraCiudad": false
    }
  },
  {
    "datos": {
      "nombre": "Freddy",
      "especie": "Hurón",
      "fechaNacimiento": "2022-01-12",
      "sexo": "Macho",
      "tamaño": "Pequeño",
      "peso": 0.8,
      "personalidad": "Curioso y juguetón",
      "historia": "Fue rescatado de un hogar donde no lo podían mantener y busca un hogar amoroso",
      "imagen": "https://res.cloudinary.com/dpekebzbd/image/upload/v1683535612/Lucky/huron_gv8cch.png"
    },
    "salud": {
      "vacunado": true,
      "desparasitado": true,
      "sano": true,
      "esterilizado": true,
      "identificado": true,
      "microchip": true
    },
    "adopcion": {
      "requisitos": "Se requiere hogar con experiencia en cuidado de hurones y dispuesto a proveerle un ambiente adecuado para sus necesidades",
      "tasaAdopcion": 150,
      "envioOtraCiudad": false
    }
  },
  {
    "datos": {
      "nombre": "Donatella",
      "especie": "Tortuga",
      "fechaNacimiento": "2010-04-25",
      "sexo": "Hembra",
      "tamaño": "Pequeño",
      "peso": 0.5,
      "personalidad": "Tranquila y observadora",
      "historia": "Ha estado en la familia por muchos años, pero por razones de espacio necesitamos encontrarle un nuevo hogar",
      "imagen": "https://res.cloudinary.com/dpekebzbd/image/upload/v1683535628/Lucky/tortuga_urcaku.png"
    },
    "salud": {
      "vacunado": false,
      "desparasitado": false,
      "sano": true,
      "esterilizado": false,
      "identificado": false,
      "microchip": false
    },
    "adopcion": {
      "requisitos": "Se requiere hogar con experiencia en cuidado de tortugas y dispuesto a proveerle un ambiente adecuado para su especie",
      "tasaAdopcion": 50,
      "envioOtraCiudad": true
    }
  },
  {
    "datos": {
      "nombre": "Pelusa",
      "especie": "Cobaya",
      "fechaNacimiento": "2022-01-01",
      "sexo": "Hembra",
      "tamaño": "Pequeño",
      "peso": 0.5,
      "personalidad": "Cariñosa y juguetona",
      "historia": "Fue encontrada abandonada en una caja en la calle",
      "imagen": "https://res.cloudinary.com/dpekebzbd/image/upload/v1683535632/Lucky/cobayas_ixvmdl.png"
    },
    "salud": {
      "vacunado": true,
      "desparasitado": true,
      "sano": true,
      "esterilizado": false,
      "identificado": false,
      "microchip": false
    },
    "adopcion": {
      "requisitos": "Se busca hogar que pueda brindarle los cuidados necesarios y mucho amor",
      "tasaAdopcion": 200,
      "envioOtraCiudad": false
    }
  },
  {
    "datos": {
      "nombre": "Nero",
      "especie": "Tarántula",
      "fechaNacimiento": "2020-05-15",
      "sexo": "Macho",
      "tamaño": "Grande",
      "peso": 0.2,
      "personalidad": "Reservado y tranquilo",
      "historia": "Fue adquirido de un criadero de tarántulas",
      "imagen": "https://res.cloudinary.com/dpekebzbd/image/upload/v1683535664/Lucky/tarantula_k7by7i.png"
    },
    "salud": {
      "vacunado": false,
      "desparasitado": false,
      "sano": true,
      "esterilizado": false,
      "identificado": false,
      "microchip": false
    },
    "adopcion": {
      "requisitos": "Se busca hogar que tenga experiencia previa con tarántulas y pueda brindarle los cuidados necesarios",
      "tasaAdopcion": 50,
      "envioOtraCiudad": true
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