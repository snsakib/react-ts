import React, { useState } from 'react';
import { render } from 'react-dom';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const addTodoHandler = (todoText: string) => {
    setTodos(prevTodo => prevTodo.concat(todoText));
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
