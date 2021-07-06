import React from 'react';
import { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let enteredText = todoTextInputRef.current?.value;
    if(enteredText.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo Text: </label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
