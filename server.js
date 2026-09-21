const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('API-BOOK está funcionando!');
});

app.listen(port, () => {
  console.log(`API-BOOK está rodando na porta ${port}`);
});
