const express = require('express');
const app = express();

app.use(express.json());

app.post('/num', (req, res) => {
  const { x, y, z } = req.body;
  const output = [];

  output.push('hello');
  output.push(x);

  if (Math.pow(x, y) > z) {
    output.push('higher than expected');
  } else {
    output.push(Math.pow(x, y));
  }

  output.push('done');

  res.json(output);
});

const server = app.listen(5000, () => {
  console.log('Server running on port 5000');
});
