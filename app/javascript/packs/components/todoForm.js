import React, { useState, useEffect } from 'react';

  import useTodo from '../hooks/useTodo';
  const TodoForm = () => {

    const { todos, createTodo } = useTodo();
    const { processing } = todos;

    const [process, setProcess] = useState(processing);

    const [todo, setTodo ] = useState({title: "", description: ""});
    const { title, description } = todo;

    useEffect(() => {
      console.log(processing);
      setTimeout(() => {
        setProcess(processing);
      }, 1000);
    },[todos, processing ]);

    const handleTodoItem = (key,value) => {
      setTodo({
        ...todo,
        [key]: value
      });
    }

    const handleSubmitTodo = (e) => {
      e.preventDefault();
      if(title) {
        setProcess(true);
        createTodo({title: title, description: description});
        setTodo({ title:'', description:''});
      }
    }

    return (
      <>
      <h3> TODO FORM</h3>

      { process ? "LOADING....." : '' }

      <form className="todo-form" onSubmit={handleSubmitTodo}>
        <label className="todo-label"> Title </label>
        <input id="" name="title"

          value={title} style={{width: "100%"}}
          onChange={(e) => handleTodoItem('title', e.target.value)}
        />
          <br/>
          <br/>
          <label className="todo-label"> Description </label>
          <textarea id="" name="description"
            value={description} style={{width: "100%"}}
            onChange={(e) => handleTodoItem('description', e.target.value)}
          />

          <button className="todo-button">SUBMIT</button>
        </form>
      </>
    )
  }

export default TodoForm;

