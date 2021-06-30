const express = require('express');
require('dotenv').config();

const app = express();

const PORT = 3000;

app.get('/', (_request, response) => {
  response.status(200).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
