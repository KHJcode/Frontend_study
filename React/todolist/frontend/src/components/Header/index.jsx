import React, { useContext } from 'react'
import './style.css';
import { TodoContext } from '../../App';

const Header = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <h1>HELLO TO DO 에플리케이션</h1>
      <div className="countInfo">
        해야할 일 {todos.filter(v=>v.status==='todo').length}개가 있습니다.
      </div>
    </div>
  );
};

export default Header;
