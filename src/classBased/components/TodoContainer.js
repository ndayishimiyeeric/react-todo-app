import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const allItem = JSON.parse(temp);
    if (allItem) {
      this.setState({ todos: allItem });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleClick = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  deleteTodo = (id) => {
    this.setState((prevState) => (
      {
        todos: prevState.todos.filter((todo) => todo.id !== id),
      }
    ));
  }

  addTodoItem = (text) => {
    const { todos } = this.state;
    const newTodo = {
      id: uuidv4(),
      title: text,
      completed: false,
    };
    this.setState({
      todos: [...todos, newTodo],
    });
  }

  handleUpdate = (updateText, id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updateText,
          };
        }
        return todo;
      }),
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addItem={this.addTodoItem} />
          <TodosList
            todos={todos}
            handleClick={this.handleClick}
            deleteTodo={this.deleteTodo}
            update={this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
