//require importa um modulo/arquivo/qq coisa javascript para ser usado posteriormente
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = app;