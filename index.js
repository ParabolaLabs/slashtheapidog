const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');

const balls = require('./api/balls');
const bones = require('./api/bones');
const holes = require('./api/holes');

const app = express();
app.use(bodyParser.json({ strict: false }));
app.use(favicon(path.join(__dirname, 'static', 'images', 'favicon.ico')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.use('/api/balls', balls);
app.use('/api/bones', bones);
app.use('/api/holes', holes);

module.exports.handler = serverless(app);
