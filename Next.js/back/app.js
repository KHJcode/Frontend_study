const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello Backend Server!');
});

app.post('/api/post', (req, res) => {
  res.json([
    { id: 1, content: 'hello1' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' }
  ]);
});

app.delete('/api/post', (req, res) => {
  res.json({ id: 1 });
})

app.listen(PORT, () => {
  console.log('Server Start!');
});