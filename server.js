const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});



const personRoute = require('./routes/personRoute')
app.use('/person',personRoute);

const menuRouter = require('./routes/menuRoute');
app.use('/menu',menuRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});