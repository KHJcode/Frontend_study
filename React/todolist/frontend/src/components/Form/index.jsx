import React, { useContext, useRef } from 'react';
import { TodoContext } from '../../App';

const Form = () => {
  const inputRef = useRef(false);
  const { addTodo } = useContext(TodoContext);

  const addTodoData = (e) => {
    e.preventDefault();
    addTodo(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <form action="">
      <input type="text" ref={inputRef} />
      <button onClick={addTodoData}>추가</button>
    </form>
  );
};

export default Form;