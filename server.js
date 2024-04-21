const express = require('express');
const app = express();
const proxy = require('proxy-addr');

app.set('trust proxy', true);

app.get('/', (req, res) => {
  const clientIP = proxy(req, 'loopback');
  console.log(`Client IP: ${clientIP}`);
  res.send('IP logged successfully!');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
