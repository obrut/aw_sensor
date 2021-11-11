'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT;
const HOST = '0.0.0.0';
const MAX = process.env.MAX || 100;
const MIN = process.env.MIN || 0;

// App
const app = express();
app.get('/', (req, res) => {
  const number = Math.floor(
    Math.random() * (MAX - MIN + 1)
  );
  res.contentType('application/json');
  const response = { name: process.env.ID, value: number };
  res.end(JSON.stringify(response));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
