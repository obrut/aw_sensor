'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const MAX = process.env.MAX || 100;
const MIN = process.env.MIN || 0;
const name = process.env.ID || 'NoId';
const HOST = process.env.HOST || '0.0.0.0';

// App
const app = express();
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
app.get('/', (req, res) => {
  res.contentType('application/json');
  const value = random(MIN, MAX);
  console.log(MIN, MAX, value);
  const response = { name, value };
  res.end(JSON.stringify(response));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
