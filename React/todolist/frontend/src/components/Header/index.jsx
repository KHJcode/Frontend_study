import React from 'react'
import './style.css';

const Header = ({ todos }) => {
  return (
    <div>
      <h1>HELLO TO DO 에플리케이션</h1>
      <div className="countInfo">{todos.length}</div>
    </div>
  );
};

export default Header;
