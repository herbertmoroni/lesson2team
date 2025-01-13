const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));

// Import routes
const professionalRoute = require('./routes/professional'); 

// Use routes
app.use('/', professionalRoute);

app.listen(port, () => {
    console.log(`Server running at: `);
    console.log(`➜ Local: \x1b[34mhttp://localhost:${port}\x1b[0m`);
    console.log(`➜ Press \x1b[33mCTRL+C\x1b[0m to stop the server`);
  });