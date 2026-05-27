const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Log = require('../models/Log');
router.get('/', auth, async (req, res) => {
  try {
    const logs = await Log.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(logs);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});
router.post('/', auth, async (req, res) => {
  const { object, date, notes, rating } = req.body;
  try {
    const newLog = new Log({
      userId: req.user.id,
      object,
      date,
      notes,
      rating
    });
    const log = await newLog.save();
    res.json(log);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});
router.delete('/:id', auth, async (req, res) => {
  try {
    let log = await Log.findById(req.params.id);
    if (!log) return res.status(404).json({ msg: 'Log not found' });
    if (log.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    await Log.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Log removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});
module.exports = router;
