"use strict";require('dotenv').config();
const app = require('./app').default;

const port = process.env.APP_PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
