const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connect } = require('./src/utils/database');
const router = require('./src/api/routes/routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/user', routerUser);


connect();


app.listen(PORT , () => console.log(`listening on: http://localhost:${PORT}`));
