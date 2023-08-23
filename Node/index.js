const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Set up a route to serve the info page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/info.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

