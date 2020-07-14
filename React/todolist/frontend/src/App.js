import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List';
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
    setTodos([...todos, { title : newTodo, id: todos.length+1 }]);
    setNewTodo('');
  };

  useEffect(() => {
    console.log('새로운 내용이 렌더링 됬네요');
  }, [todos]);

  return (
    <>
    <h1>todo 에플리케이션</h1>
    <form action="">
      <input type="text" onChange={changeInputData} value={newTodo} />
      <button onClick={addTodo}>할 일 추가</button>
    </form>
    <List todos={todos} loading={loading} />
    </>
  );
};

export default App;

