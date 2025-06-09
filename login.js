const express = require('express');
const router = express.Router();
const { getDb } = require('./db/mongo_connection');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const db = getDb();
    const users = db.collection('users');

    const user = await users.findOne({ username, password });
    if (user) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('❌ Login Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
