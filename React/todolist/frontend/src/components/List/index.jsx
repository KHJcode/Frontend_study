import React, { useContext } from 'react';

import Item from '../Item/';

import { TodoContext } from '../../TodoStore';

const List = () => {
  const { todos, loading } = useContext(TodoContext);
  let todoList = <div>Loading...</div>;
  if (!loading) todoList = todos.map(todo => 
    <Item key={todo.id} todo={todo} />
  );
  return (
    <ul>
      {todoList}
    </ul>
  );
};

export default List;