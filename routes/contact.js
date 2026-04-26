const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// Submit contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.json({ msg: 'Message sent' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;