const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();

//person details
const personRoute = require('./routes/personRoute')
app.use('/person',personRoute);

const menuRouter = require('./routes/menuRoute');
app.use('/menu',menuRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});