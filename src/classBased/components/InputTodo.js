import React from 'react';
import PropTypes from 'prop-types';

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    const { text } = this.state;
    const { addItem } = this.props;
    event.preventDefault();
    if (text.trim()) {
      addItem(text);
      this.setState({
        text: '',
      });
    }
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={text}
          name="text"
          onChange={this.handleChange}
          required
          className="input-text"
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;

InputTodo.propTypes = {
  addItem: PropTypes.func.isRequired,
};
