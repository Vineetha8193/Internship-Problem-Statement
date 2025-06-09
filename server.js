const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectToMongo } = require('./db/mongo_connection');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use(require('./register'));
app.use(require('./login'));
app.use(require('./profile_update'));

connectToMongo().then(() => {
  app.listen(3000, () => {
    console.log('✅ Server running at http://localhost:3000');
  });
});

