const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connect } = require('./src/utils/database');
const routerUser = require('./src/api/routes/routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connect();



app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/user', routerUser);





app.listen(PORT , () => console.log(`listening on: http://localhost:${PORT}`));
