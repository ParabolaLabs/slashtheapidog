const express = require('express');
const router = express.Router();
const balls = require('./db/balls.json');
const { buildResult, getItem } = require('./helpers');

router.get('/', function(req, res) {
  res.json(buildResult(balls.data));
});

router.post('/', function(req, res) {
  const { color, squeaks } = req.body;
  if (!color || !squeaks) {
    res.status(400).json({ error: "Missing required paramters." });
  }
  else {
    res.status(201).json({ message: "Successful POST request. New balls are not saved. Only Slash can dig them!" });
  }
});

router.get('/:ballId', function(req, res) {
  const ball = getItem(balls.data, req.params.ballId);
  if (!ball) {
    res.status(404).json({ error: "Hole not found" });
  }
  else {
    res.json(ball);
  }
});

router.put('/:ballId', function(req, res) {
  const ball = getItem(balls.data, req.params.ballId);
  if (!ball) {
    res.status(404).json({ error: "Hole not found" });
    return;
  }

  const { color, squeaks } = req.body;
  if (!color || !squeaks) {
    res.status(400).json({ error: "Missing required paramters." });
  }
  else {
    res.status(201).json({ message: "Successful PUT request. Existing balls are not actually modified. Only Slash can change them!" });
  }
});

router.delete('/:ballId', function(req, res) {
  const ball = getItem(balls.data, req.params.ballId);
  if (!ball) {
    res.status(404).json({ error: "Hole not found" });
    return;
  }

  res.json({ message: "Successful DELETE request. Holes are not actually deleted. Only Slash can cover them up!" });
});

module.exports = router;
