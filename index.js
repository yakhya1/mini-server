const express = require('express');
const port = 4300
const app = express();

app.use(require('./routes/product.rout.js'));
app.use(require('./routes/brand.rout.js'));

app.listen(port, () => {
  console.log(`Сервер успешно запущен http://localhost:${port}`);
});