import React, { useState, useEffect } from 'react';
import './App.css';

import List from './components/List/';
import Header from './components/Header/';
import useFetch from './useFetch';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const loading = useFetch(setTodos, 'http://localhost:8000/todo');

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { title : newTodo, id: todos.length+1, status: 'todo' }]);
    setNewTodo('');
  };

  const changeTodoStatus = (id) => {
    const updateTodos = todos.map(todo => {
      if (todo.id === +id) {
        if (todo.status === 'done')  todo.status = 'todo';
        else todo.status = 'done';
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  useEffect(() => {
    console.log('새로운 내용이 렌더링 됬네요');
  }, [todos]);

  return (
    <>
    <Header todos={todos} />
    <form action="">
      <input type="text" onChange={changeInputData} value={newTodo} />
      <button onClick={addTodo}>할 일 추가</button>
    </form>
    <List todos={todos} loading={loading} changeTodoStatus={changeTodoStatus} />
    </>
  );
};

export default App;

