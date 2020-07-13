import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List';


const App = () => {
  const [todos, setTodos] = useState(['js공부']);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  useEffect(() => {
    console.log('새로운 내용이 렌더링 됬네요');
  }, [todos]);

  return (
    <>
    <h1>todo 에플리케이션</h1>
    <form action="">
      <input type="text" name="" onChange={changeInputData} value={newTodo} />
      <button onClick={addTodo}>할 일 추가</button>
    </form>
    <List todos={todos} />
    </>
  );
};

export default App;

