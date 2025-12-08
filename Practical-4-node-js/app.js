const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const todos = [];

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const newTodo = {
    id: Date.now(),
    title
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});


app.get('/todos', (req, res) => {
  res.json(todos);
});


app.listen(3000, () => {
  console.log('Todo API running on http://localhost:3000');
});
