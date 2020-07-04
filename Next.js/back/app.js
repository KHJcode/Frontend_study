const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const db = require('./models');
db.sequelize.sync()
  .then(() => {
    console.log('DB connected...');
  })
  .catch(console.error);

const postRouter = require('./routes/post');

app.get('/', (req, res) => {
  res.send('Hello Backend Server!');
});

app.use('/post', postRouter);

app.listen(PORT, () => console.log('Server Start!'));
