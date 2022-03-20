import React from 'react';

const TodoList = (props) => (
  <ul>
    {
      props.todoList.map((todo, index) => <li key={index}>{todo.name}</li>)
    }
  </ul>
);

// walidacja propsow - prop-types
// https://www.npmjs.com/package/prop-types

// TodoList.propTypes = {
//   todoList: propTypes.Array,
// };

export default TodoList;
