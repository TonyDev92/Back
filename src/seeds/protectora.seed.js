const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Protectora = require('../api/models/protectoramodel');

const arrayProtectora = [
    {
        "email": "protectora1@gmail.com",
        "password": "password123",
        "city": "Barcelona",
        "name": "Protectora La Esperanza",
        "direction": "Calle Gran Vía, 123",
        "telephone": 123456789,
        "animals": [
          "64590aa12da8eb444a5c5761",
          "64590aa12da8eb444a5c5762",
          "64590aa12da8eb444a5c5763"
        ]
      },
      {
        "email": "protectora2@gmail.com",
        "password": "password123",
        "city": "Madrid",
        "name": "Protectora Los Amigos",
        "direction": "Calle Alcalá, 456",
        "telephone": 987654321,
        "animals": [
          "64590aa12da8eb444a5c5764",
          "64590aa12da8eb444a5c5765",
          "64590aa12da8eb444a5c5766"
        ]
      },
      {
        "email": "protectora3@gmail.com",
        "password": "password123",
        "city": "Valencia",
        "name": "Protectora La Vida",
        "direction": "Calle Valencia, 789",
        "telephone": 456789012,
        "animals": [
          "64590aa12da8eb444a5c5767",
          "64590aa12da8eb444a5c5768"
        ]
      }
]

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(async () => {
      const allProtectora = await Protectora.find();
      if (allProtectora.length) {
        await Protectora.collection.drop();
        console.log("Protectora eliminados");
      }
    })
    .catch((err) => console.log("Error eliminando Protectora", err))
    .then(async () => {
      const ProtectoraMap = arrayProtectora.map((animal) => new Protectora(animal));
      await Protectora.insertMany(ProtectoraMap);
      console.log("Protectora creados");
    })
    .catch((err) => console.log("Error creando Protectora", err))
    .finally(() => mongoose.disconnect());