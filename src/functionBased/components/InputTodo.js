import React from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const { addItem } = props;
  const [formData, setFormData] = React.useState({
    text: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => { //eslint-disable-line
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.text.trim()) {
      addItem(formData.text);
      setFormData({
        text: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        value={formData.text}
        name="text"
        onChange={handleChange}
        required
        className="input-text"
      />
      <button
        type="submit"
        className="input-submit"
      >
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default InputTodo;

InputTodo.propTypes = {
  addItem: PropTypes.func.isRequired,
};
