import React from 'react';
import './style.css';

import CounterExample from './pages/CounterExample/CounterExample.view';
import TodoList from './pages/TodoList/TodoList.view';

export default function App() {
  return (
    <>
      {' '}
      <CounterExample />
      <TodoList />
    </>
  );
}
