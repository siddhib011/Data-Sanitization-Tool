const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files (frontend)
app.use(express.static('public'));

// Endpoint to start data sanitization
app.post('/sanitize', (req, res) => {
  // Execute the Linux shell script
  exec('./backend/sanitize.sh', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ success: false, message: 'Sanitization failed' });
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).json({ success: false, message: 'Sanitization failed' });
    }
    console.log(`Stdout: ${stdout}`);
    res.json({ success: true, message: 'Sanitization completed successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});