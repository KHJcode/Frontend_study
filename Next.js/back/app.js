const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

const db = require('./models');

db.sequelize.sync()
  .then(() => {
    console.log('DB connected...');
  })
  .catch(console.error);

app.use(cors({
  origin: true,
  credentials: false,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(PORT, () => console.log('Server Start!'));
