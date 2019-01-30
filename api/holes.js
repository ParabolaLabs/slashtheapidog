const express = require('express');
const router = express.Router();
const holes = require('../db/holes.json');
const { buildResult, getItem } = require('./utils/helpers');

router.get('/', function(req, res) {
  res.json(buildResult(holes.data));
});

router.post('/', function(req, res) {
  const { name, x, y, size } = req.body;
  if (!name || !x || !y || !size) {
    res.status(400).json({ error: "Missing required paramters." });
  }
  else {
    res.status(201).json({ message: "Successful POST request. New holes are not saved. Only Slash can dig them!" });
  }
});

router.get('/:holeId', function(req, res) {
  const hole = getItem(holes.data, req.params.holeId);
  if (!hole) {
    res.status(404).json({ error: "Hole not found" });
  }
  else {
    res.json(hole);
  }
});

router.put('/:holeId', function(req, res) {
  const hole = getItem(holes.data, req.params.holeId);
  if (!hole) {
    res.status(404).json({ error: "Hole not found" });
    return;
  }

  const { name, x, y, size } = req.body;
  if (!name || !x || !y || !size) {
    res.status(400).json({ error: "Missing required paramters." });
  }
  else {
    res.status(201).json({ message: "Successful PUT request. Existing holes are not actually modified. Only Slash can change them!" });
  }
});

router.delete('/:holeId', function(req, res) {
  const hole = getItem(holes.data, req.params.holeId);
  if (!hole) {
    res.status(404).json({ error: "Hole not found" });
    return;
  }

  res.json({ message: "Successful DELETE request. Holes are not actually deleted. Only Slash can cover them up!" });
});

module.exports = router;
