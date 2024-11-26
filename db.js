const mongoose = require('mongoose');
require('dotenv').config();
//url
//const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () =>{
    console.log('Connected to mongoDB server');
});

db.on('error', () => {
    console.log('Error in mongoDB server');
});

db.on('disconnected', () => {
    console.log('Disconnected mongoDB server');
});

module.exports = db;