const express = require('express');
const router = express.Router();
const { getDb } = require('./db/mongo_connection');

router.post('/profile', async (req, res) => {
  const { username, age, dob, contact } = req.body;

  try {
    const db = getDb();
    const profiles = db.collection('profiles');

    const result = await profiles.updateOne(
      { username },
      { $set: { age, dob, contact } },
      { upsert: true }
    );

    res.json({ message: 'Profile saved/updated' });
  } catch (err) {
    console.error('❌ Profile Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
