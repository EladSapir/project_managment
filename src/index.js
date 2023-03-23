import express from 'express';

const PORT = process.env.PORT || 5000;
const app = express();
app.get('/', (req, res) => {
  console.log('Got a request');
  res.sendFile('src/index.js');
  return res;
});

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});
