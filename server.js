const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const clientIP = req.ip;
  console.log(`Client IP: ${clientIP}`);
  res.send('IP logged successfully!');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
