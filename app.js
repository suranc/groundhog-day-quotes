// app.js

const express = require('express');
const bodyParser = require('body-parser');

// initialize our express app
const app = express();

const quote = require('./routes/quote.route'); // Imports routes for the products

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/quotes';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/quotes', quote);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

