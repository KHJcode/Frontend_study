const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const postRoute = require('./routes/post');

app.get('/', (req, res) => {
  res.send('Hello Backend Server!');
});

app.use('/post', postRoute);

app.listen(PORT, () => console.log('Server Start!'));
