const express = require('express');

const app = express();

// Define endpoints
app.get('/', (req, res) => {
  res.send('knock knock');
});

// Create server
app.listen(8000, () => {
  console.log('Listening on port 8000');
});

