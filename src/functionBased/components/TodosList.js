import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todos, handleClick, deleteTodo, update,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleClick={handleClick}
          deleteTodo={deleteTodo}
          update={update}
        />
      ))}
    </ul>
  );
};

export default TodosList;

TodosList.propTypes = {
  todos: PropTypes.isRequired,
  handleClick: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};
