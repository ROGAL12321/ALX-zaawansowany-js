import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList.jsx';

const todos = [
  {
    name: 'Wynieść śmieci',
    checked: false,
  },
  {
    name: 'Przyjść na zajęcia',
    checked: true,
  },
];

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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // console.log(inputValue);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.length < 2) {
      alert('blad');
    }
  };

  return (<div>
  <h1>Todo list</h1>
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Write todo" onChange={handleInputChange}/>
    <button type="submit">send todo</button>
  </form>
  <TodoList todoList={todos}/>
</div>);
};

export default App;
