const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connect } = require('mongoose');

dotenv.config();
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

connect();

app.listen(PORT , () => console.log(`listening on: http://localhost:${PORT}`));
