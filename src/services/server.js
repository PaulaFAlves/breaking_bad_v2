const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const data = require('./localApi.json');

app.get('/', function(req, res) {
  return res.json({ data });
});

app.listen(9000, () => console.log('Express started at http://localhost:9000'));

module.exports = app;