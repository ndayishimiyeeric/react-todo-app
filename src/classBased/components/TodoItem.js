import React from 'react';
import PropTyes from 'prop-types';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const [edit, setEdit] = React.useState(false);
  const {
    todo, handleClick, deleteTodo, update,
  } = props;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (edit) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  function handleEditing() {
    setEdit(true);
  }

  function handleUpdateDone(event) {
    if (event.key === 'Enter') {
      setEdit(false);
    }
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => handleClick(todo.id)}
        />
        <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </div>
      <input
        type="text"
        value={todo.title}
        className={styles.textInput}
        style={editMode}
        onChange={(event) => update(event.target.value, todo.id)}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
}

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTyes.isRequired,
  handleClick: PropTyes.func.isRequired,
  deleteTodo: PropTyes.func.isRequired,
  update: PropTyes.func.isRequired,
};
