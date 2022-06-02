import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

const TodoContainer = () => {
  function getTodosInitialState() {
    const temp = localStorage.getItem('todos');
    const allItem = JSON.parse(temp);
    return allItem || [];
  }
  const [todos, setTodos] = React.useState(getTodosInitialState());

  React.useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleClick = (id) => {
    setTodos((prevState) => (
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    ));
  };

  const deleteTodo = (id) => {
    setTodos((prevState) => (
      prevState.filter((todo) => todo.id !== id)
    ));
  };

  const addTodoItem = (text) => {
    const newTodo = {
      id: uuidv4(),
      title: text,
      completed: false,
    };
    setTodos(
      [...todos, newTodo],
    );
  };

  const handleUpdate = (updateText, id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.title = updateText; //eslint-disable-line
      }
      return todo;
    }));
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addItem={addTodoItem} />
        <TodosList
          todos={todos}
          handleClick={handleClick}
          deleteTodo={deleteTodo}
          update={handleUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
