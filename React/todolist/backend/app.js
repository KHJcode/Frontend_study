const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8000;

const state = [
  {id: 1, title: '수학 공부하기'},
  {id: 2, title: 'C# 공부하기'},
  {id: 3, title: '앱 개발하기'},
  {id: 4, title: '커밋하기'}
];

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hello, To Do List!');
});

app.get('/todo', (req, res) => {
  setTimeout(() => res.status(200).send(state), 500);
});

app.listen(PORT, console.log('Server is start on port is 8000!'));
