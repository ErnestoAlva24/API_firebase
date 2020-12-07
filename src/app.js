const express = require('express');
const morgan = require('morgan');
const path = require('path');
const body_parser = require("body-parser");
const cors = require('cors');

const app = express();

//settings
app.set('port',process.env.PORT || 4000);
app.use(cors());
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname,'public')));

module.exports = app;