const express = require('express');
const router = express.Router();
const bones = require('./db/bones.json');
const { buildResult, getItem } = require('./helpers');

router.get('/', function(req, res) {
  res.json(buildResult(bones.data));
});

router.post('/', function(req, res) {
  const { age, material, size, remainder } = req.body;
  if (!age || !material || !size || !remainder) {
    res.status(400).json({ error: "Missing required paramters." });
  }
  else {
    res.status(201).json({ message: "Successful POST request. New bones are not saved. Only Slash can dig them!" });
  }
});

router.get('/:boneId', function(req, res) {
  const bone = getItem(bones.data, req.params.boneId);
  if (!bone) {
    res.status(404).json({ error: "Hole not found" });
  }
  else {
    res.json(bone);
  }
});

router.put('/:boneId', function(req, res) {
  const bone = getItem(bones.data, req.params.boneId);
  if (!bone) {
    res.status(404).json({ error: "Hole not found" });
    return;
  }

  const { age, material, size, remainder } = req.body;
  if (!age || !material || !size || !remainder) {
    res.status(400).json({ error: "Missing required paramters." });
  }
  else {
    res.status(201).json({ message: "Successful PUT request. Existing bones are not actually modified. Only Slash can change them!" });
  }
});

router.delete('/:boneId', function(req, res) {
  const bone = getItem(bones.data, req.params.boneId);
  if (!bone) {
    res.status(404).json({ error: "Hole not found" });
    return;
  }

  res.json({ message: "Successful DELETE request. Holes are not actually deleted. Only Slash can cover them up!" });
});

module.exports = router;
