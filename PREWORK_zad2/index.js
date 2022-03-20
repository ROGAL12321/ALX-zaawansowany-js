// Podstawy

// window - przegladrka
// uzycie - fetch, localStorage
// console.log(window);

// console.log(innerWidth)
// console.log(window.innerWidth)

//
// console.log(document);

// wyszukiwanie elementów

// to zwraca element
// const title = document.querySelector('#title'); //h1 .className #id .className dsa

// console.log(title)

// to zwraca zawsze tablice
// const titles = document.querySelectorAll('h1');

// dodawanie elementów

// const list = document.querySelector('#list');

// list.innerHTML += `<li> przyjść na zajęcia </li>`
// list.innerHTML += `<li> wyprowadzic psa </li>`

// usuwanie

// list.innerHTML = ''; // 1 metoda - usuwanie wnetrznosci
// list.remove(); // 2 metoda - usuwanie z rodzicem

// console.log(list.innerHTML)

// modyfikacja

// const listItems = document.querySelectorAll('#list li')

// console.log(listItems);

// listItems.forEach(item => {
// console.log(item);
// item.classList.add('completed')
// item.classList.remove('completed')
// item.classList.toggle('completed')

// item.style.textDecoration = 'line-through';
// })

// nullish operator
// const todos = JSON.parse(localStorage.getItem('todos')) ?? [];
let todos = JSON.parse(localStorage.getItem('todos'));

if (todos === null) {
  todos = [];
}

const form = document.querySelector('#todo-form');
const draftButton = document.querySelector('#draftButton');
const list = document.querySelector('#list');
const input = document.querySelector('#todo-input');
const error = document.querySelector('#error');

input.value = localStorage.getItem('draft');

todos.forEach((todo) => {
  list.innerHTML += `<li data-text="${todo.name}"  ${todo.isChecked ? 'class="completed"' : ''}>
  <input type="checkbox" ${todo.isChecked ? 'checked' : ''}>
  ${todo.name}
  <button type="button"> X </button>
  </li>`;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // walidacja
  if (input.value.length < 2) {
    error.innerText = 'Pole musi miec minimum 2 znaki';
    return;
  }

  // dodawanie elementu listy
  list.innerHTML += `<li data-text="${input.value}">
    <input type="checkbox">
    ${input.value}
    <button type="button"> X </button>
  </li>`;

  localStorage.setItem(
    'todos',
    JSON.stringify([
      ...todos,
      {
        name: input.value,
        checked: false,
      },
    ]),
  );

  // czyszczenie pola formularza
  input.value = '';
  error.innerText = '';
});

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'INPUT') {
    // console.log(event.target); // konkretny klikniety checkbox
    const selectedInput = event.target;

    // na jego rodzicu (czyli li) manipuluje klasa completed, ktora w CSS zmienia styl wyswietlenia
    selectedInput.parentElement.classList.toggle('completed');
  }

  // Usuwanie
  if (event.target.tagName === 'BUTTON') {
    const selectedButton = event.target;
    selectedButton.parentElement.remove();

    const clickedTodoText = event.target.parentElement.getAttribute('data-text');

    const filteredTodos = todos.filter((todo) => todo.name !== clickedTodoText);
    todos = filteredTodos;

    localStorage.setItem('todos', JSON.stringify(filteredTodos));
  }
});

draftButton.addEventListener('click', () => {
  localStorage.setItem('draft', input.value);
});

// Zadanie domowe:

// 1. Dopisac walidacje do formularza
// 2. Dodac do localStorage przypadek w ktorym mam przekreslone zadanie (po name)
