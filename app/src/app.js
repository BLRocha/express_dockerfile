const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')();
const { resolve } = require('path');

const app = express();

app.use(express.static(resolve(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./routes/routes'));

module.exports = app;
