const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const balls = require('./balls');
const bones = require('./bones');
const holes = require('./holes');

const app = express();
app.use(bodyParser.json({ strict: false }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.use('/api/balls', balls);
app.use('/api/bones', bones);
app.use('/api/holes', holes);

module.exports.handler = serverless(app);
