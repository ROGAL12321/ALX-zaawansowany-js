import React from 'react';

import styles from './TodoList.module.css';

const TodoList = (props) => {
  if (!Array.isArray(props.todoList) || props.todoList.length === 0) return null;

  return (
    <ul className={styles.list}>
      {
        props.todoList.map((todo, index) => <li key={index}>{todo.name}</li>)
      }
    </ul>
  );
};

// walidacja propsow - prop-types
// https://www.npmjs.com/package/prop-types

// TodoList.propTypes = {
//   todoList: propTypes.Array,
// };

export default TodoList;
