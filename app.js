const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>CI/CD DevOps Project 🚀</h1><p>Now using Express + AWS + GitHub Actions</p>');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});