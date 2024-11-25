const mongoose = require('mongoose');
//url
const mongoURL = 'mongodb://localhost:27017/hotels'
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