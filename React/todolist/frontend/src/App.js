import React from 'react';
import './App.css';

import List from './components/List';
import Header from './components/Header';
import Form from './components/Form';

import TodoStore from './TodoStore';

const App = () => {
  return (
    <TodoStore>
      <Header />
      <Form />
      <List />
    </TodoStore>
  );
};

export default App;