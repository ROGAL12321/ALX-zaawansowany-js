console.log('Hello ALX')

// Zmienne

// ES5

// var ma zasieg leksykalny i mozna go nadpisac

var name = 'Damian'; // String
var age = 25; // Number
var isAdult = age >= 18; // Boolean (true/false)
var dogs = ['siunia', 'piunia']; // Object (Array)
var person = {
  name: 'Krzysiek',
  age: 40
} // Object
var cat = null;
var car = undefined;

// ES6+

// let ma zasieg blokowy i mozna nadpisac
let name2 = 'Damian';
const age2 = 35;

// if (true) {
//   var someVariable = 'Damian'
// }

// console.log(someVariable)


// const someVariable2 = 33;
// someVariable2 = '33'; // error bo const jest stala

// const dla typow zlozonych nie jest staly o_O

// const candidates = ['Piotr', 'Damian'];

// candidates.push('Pawel');

// console.log(candidates)



// 2. Funkcje

// Funkcje powinny byc pure

// UNPURE FUNCTION - kazde wywolanie daje rozny wynik
// let weight = 70;
// const height = 1.9; // w metrach

// function calculateBMI() {
//   return weight / (height * height)
// }

// console.log(calculateBMI())

// weight = weight + 5;

// console.log(calculateBMI())

// PURE

// let weight = 70;
// const height = 1.9; // w metrach

// function calculateBMI(w, h) {
//   return w / (h * h)
// }

// console.log(calculateBMI(weight, height))

// weight2 = weight + 5;

// console.log(calculateBMI(weight, height))



// 2 sposob wywolywania funkcji

// function someFunction() {
//   return 5;
// }

// const someFunction = () => {
//   return 5;
// }

// Programowanie funkcyjne (operacje na tablicach)

// forEach
// map
// reduce
// filter

const shoes = [
  {
    company: 'nike',
    price: 399
  }, {
    company: 'adidas',
    price: 199
  }
]

// forEach - przechodzenie przez elementy

// shoes.forEach((shoe) => {
//   console.log(shoe);
// })

// map - przechodzenie przez elementy i zwracanie tego do nowej tablicy

// const newArray = shoes.map(shoe => {
//   return shoe.price * 0.8;
// })

// console.log(newArray)

// filter  - przechodzenie przez elementy i decydowanie ktore elementy trafia do tablicy wynikowej

// const shoesAbove200 = shoes.filter(shoe => {
//   return shoe.price > 200;
// })

// console.log(shoesAbove200)

// find

// const nikeShoes = shoes.find(shoe => {
//   return shoe.price > 100;
// })

// console.log(nikeShoes)

// reduce

// const shoes = [
//   {
//     company: 'nike',
//     price: 399
//   }, {
//     company: 'adidas',
//     price: 199
//   }
// ]

let sum = 0

shoes.forEach((shoe) => {
  sum = sum + shoe.price;
})

const sum2 = shoes.reduce((currentSum, shoe) => {
  return currentSum + shoe.price;
}, 0)

console.log(sum);
console.log(sum2);

// W domu do przejrzenia

// Rest Operator [...array, ...array2]
// Programowanie funkcyjne - http://reactivex.io/learnrx/
// Prework