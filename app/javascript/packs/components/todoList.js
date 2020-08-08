import React, { useState, useEffect } from 'react';

import useTodo from '../hooks/useTodo';
import { useDispatch } from 'react-redux';

import TodoForm from './todoForm';

const TodoList = () => {

  const dispatch = useDispatch();

  const { todos:getTodosList, getTodos } = useTodo();
  const { todos, processing } = getTodosList || []
  const [process, setProcess] = useState(processing);

  useEffect(() => {
    setTimeout(() => {
      setProcess(processing);
    }, 1000);
  },[ getTodosList, getTodos, processing ]);

  useEffect(() => {
    setProcess(true);
    getTodos({isDeleted: false });
  },[ dispatch ]);

  return (
    <div className="todos-list">
      <h1> MY TO DO LIST </h1>
      { process ? "LOADING....." : '' }
     <hr/>
      { !process && todos.map((todo) => (
        <div key={`${todo.id}`}>
            ID: { todo.id } / TITLE:  { todo.title } / DESCRIPTION: { todo.description }
          <hr/>
          <br/>
        </div>
      ))}

      <TodoForm />
    </div>
  )
}

export default TodoList;
