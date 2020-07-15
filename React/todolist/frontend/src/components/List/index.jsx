import React from 'react';
import Item from '../Item/';

const List = ({ todos, loading, changeTodoStatus }) => {
  let todoList = <div>Loading...</div>;
  if (!loading) todoList = todos.map(todo => 
    <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus} />
  );
  return (
    <ul>
      {todoList}
    </ul>
  );
};

export default List;