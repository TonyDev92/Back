const express = require('express');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const { connect } = require('./src/utils/database');
const routerUser = require('./src/api/routes/routes');
const routerAnimales = require('./src/api/routes/animales.routes');
const routerProtectora = require('./src/api/routes/protectora.routes');
const routerAdopcion = require('./src/api/routes/adopcion.routes');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connect();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));

app.use('/user', routerUser);
app.use('/animales', routerAnimales);
app.use('/protectora', routerProtectora);
app.use('/adopcion', routerAdopcion);


app.use('*', (req, res) => {
    res.status(404).json('Route not found');
})


app.listen(PORT , () => console.log(`listening on: http://localhost:${PORT}`));
