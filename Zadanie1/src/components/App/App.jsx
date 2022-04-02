import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from '../TodoList/TodoList.jsx';

import styles from './App.module.css';

// ES6 Destructurization

// useState()
// React.useState

// Destukturyzacja tablic

// const cars = ['Mercedes', 'Audi', 'BMW'];
// console.log(cars[0]) // Audi
// console.log(cars[1]) // Mercedes

// const mercedes = cars[0]
// const audi = cars[1]

// const [mercedes, audi, bmw] = cars

// To jest zle, bo liczy sie index z tablicy bazowej

// const [audi, bmw] = cars

// Destrukturyzacja obiektow

// const person = {
//   name: 'Damian',
//   city: Warsaw,
//   shoe: 43
// };

// console.log(person.name)
// console.log(person.city)

// const { name } = person;
// console.log(name) //person.name

// const { name : differentValue } = person

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  useEffect(() => {
    // nullish operator ?? []
    const todosFromLS = JSON.parse(localStorage.getItem('todos')) ?? [];
    setTodos(todosFromLS);
  }, []);

  const saveTodos = (todosToSave) => {
    setTodos(todosToSave);
    localStorage.setItem('todos', JSON.stringify(todosToSave));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // walidacja
    if (inputValue.length < 2) {
      setIsErrorMessage(true);
      return;
    }

    const newTodos = [
      ...todos,
      {
        id: uuidv4(),
        name: inputValue,
        checked: false,
      },
    ];

    saveTodos(newTodos);

    // const newTodos = todos.concat({
    //   name: inputValue,
    //   checked: false,
    // });

    // setTodos(newTodos);

    // czyszczenie formularza
    setInputValue('');
  };

  // Wykonaj funkcje handleTaskFInished
  // Funkcja powinna zmieniac wartosc klucz checked tylko dla elementu kliknietego
  // podpowiedz : funkcja findIndex
  // Nowa tablica (po tej zmianie) zapisz za pomoca funkcji setTodos

  const handleTaskFinished = (id) => {
    const indexOfChangedElement = todos.findIndex((todo) => todo.id === id);
    // sprytne uzycie spread operator zeby zrobic kopie tablicy
    const changedTodos = [...todos];
    // aktualnie klikniety obiekt
    // console.log(todos[indexOfChangedElement]);

    changedTodos[indexOfChangedElement].checked = !changedTodos[indexOfChangedElement].checked;

    saveTodos(changedTodos);
  };

  const handleRemove = (id) => {
    // usunac element z tablicy
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    saveTodos(filteredTodos);
  };

  return (<div>
  <h1>Todo list</h1>
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Write todo" value={inputValue} onChange={handleInputChange}/>
    <button type="submit">send todo</button>
    {isErrorMessage ? <p className={styles.error}>Za malo znaków. Minimum 3</p> : null}
  </form>
  <TodoList todoList={todos} onRemove={handleRemove} onFinish={handleTaskFinished}/>
</div>);
};

export default App;
