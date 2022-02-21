import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const InputTodo = ({ handleAddTodo }) => {
  const [title, setTitle] = useState('');
  const onChange = (e) => {
    setTitle(e.target.value.trim());
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (title) {
      handleAddTodo(title);
      setTitle('');
    } else {
      alert('please enter yout todo');
    }
  };
  return (
    <form className="form-container">
      <input
        type="text"
        placeholder="Add todo..."
        value={title}
        onChange={onChange}
      />
      <button type="button" className="input-submit" onClick={addHandler}>
        Submit
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default InputTodo;

// class InputTodo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//     };
//   }

//   onChange = (e) => {
//     this.setState({ title: e.target.value.trim() });
//   };

//   addHandler = (e) => {
//     e.preventDefault();
//     if (this.state.title) {
//       this.props.handleAddTodo(this.state.title);
//       this.setState({
//         title: '',
//       });
//     } else {
//       alert('please enter yout todo');
//     }
//   };

//   render() {
//     return (
//       <form className="form-container">
//         <input
//           type="text"
//           placeholder="Add todo..."
//           value={this.state.title}
//           onChange={this.onChange}
//         />
//         <button className="input-submit" onClick={this.addHandler}>
//           Submit
//         </button>
//       </form>
//     );
//   }
// }
// export default InputTodo;
