import React from 'react'
import './style.css';

const Item = ({ todo, changeTodoStatus }) => {
  const toggleItem = (e) => {
    const id = e.target.dataset.id;
    changeTodoStatus(id);
  };
  const itemClassName = todo.status === 'done' ? 'done' : '';
  return (
    <li data-id={todo.id} onClick={toggleItem} className={itemClassName}>
      {todo.title}
    </li>
  );
};

export default Item;
