import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello World!');
});

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
