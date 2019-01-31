const express = require('express');
const router = express.Router();
const appointments = require('../db/appointments.json');
const { buildResult } = require('./utils/helpers');


router.get('/', function(req, res) {
  res.json(buildResult(appointments.data));
});

router.get('/today', function(req, res) {
  res.json(buildResult(appointments.data));
});

module.exports = router;
