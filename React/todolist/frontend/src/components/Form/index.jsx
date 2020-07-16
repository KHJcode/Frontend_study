import React, { useContext } from 'react';
import { TodoContext } from '../../App';

const Form = () => {
  const { addTodo, changeInputData, newTodo } = useContext(TodoContext);
  return (
    <form action="">
      <input type="text" onChange={changeInputData} value={newTodo} />
      <button onClick={addTodo}>추가</button>
    </form>
  );
};

export default Form;