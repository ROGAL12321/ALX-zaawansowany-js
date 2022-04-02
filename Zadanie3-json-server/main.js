console.log('hello world');

// Podstawy BE

// Klient <-> Serwer gada ze soba po HTTP

// HTTP Statuses

// Udalo znalezc sie zasob/strone/to czego szukamy
// Zaczynaja sie od 2XX

// 200 - OK

// Nie udalo sie znalezc to czego szukamy
// Zaczynaja sie od 4XX

// 401 - Unauthorized
// 404 - Not Found

// Zasob do ktorego chcesz sie dostac, jest gdzies indziej
// Zaczyna sie od 3XX

// 301 - moved perm
// 302 - moved temp

// Blad dyskowy/serwerowy
// Zaczynaja sie od 5XX

// 500 - blad serwera


// HTTP Methods

// GET - Odczytywanie
// POST - Tworzenie
// PUT - Edycja
// DELETE - Usuniecie


// HTTP Headers

// Headers wystepuja zarowno po stronie klienta jak i po stronie serwera

// Klienckie headery

// Authorization
// ContentType - "application/json"
// X-TENET-Y - ""

// Serwerowe Headery

// SET-COOKIE (HTTP Cookie)



// Request Body

// GET - Params (queryparams) // localhost:3003?id=5
// POST - DODANIE (Body)
// PUT - Edycja (Body)
// DELETE - Usuniecie - Params (queryparams)


// Rest API

// localhost:3003/cars

// localhost:3003/cars - GET - pobranie wszystkich sam
// localhost:3003/cars/1 - GET - pobranie sam o ID 1

// localhost:3003/cars - POST - dodanie samochodu

// localhost:3003/cars/1 - PUT - edycja samochodu

// localhost:3003/cars/1 - DELETE - usuniecie samochodu


// Asynchroniczność/Promises

// Fetch

// const TIME_FOR_KETTLE = 3000;

// console.log('Szykuje obiad')
// console.log('Mam ochote na kawe')
// console.log('wstawiam czajnik');

// setTimeout(() => {
//   console.log('zalewam kawe')
//   console.log('czekam 2min')
//   console.log('pije')
// }, TIME_FOR_KETTLE)

// console.log('zmywam naczynia')

// console.log('error4')
// console.log('error5')
// console.log('error6') // ona trwa 100ms i jest blokujaca

// JS jest Jednowatkowy

// Event Queue



// Promises

const wait = (time, message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(time > 5000) {
        return reject('Spaliles czujnik');
      }

      resolve(message)
    }, time)
  })
}




// Promise

// pending - w trakcie
// fulfilled - operacja sie udala
// rejected - operacja sie nie udala
console.log('Przed Promise')

// Wiedza potrzebna nam do kursu
// wait(6000, 'woda sie zagotowala')
//   .then(response => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   })

console.log('Po Promise')


// Promise chaining

// Promise hell
// wait(3000, 'woda sie zagotowala')
//   .then(response => {
//     console.log(response);

//     wait(2000, 'kawa jest zdatna do picia')
//       .then(response2 => {
//         console.log(response2)
//       })
//   })
//   .catch((error) => {
//     console.error(error);
//   })



// wait(3000, 'woda sie zagotowala')
//   .then(response => {
//     console.log(response);
//     return wait(6000, 'kawa jest zdatna do picia')
//   })
//   .then(response2 => {
//     console.log(response2)
//   })
//   .catch((error) => {
//     console.error(error);
//   })

// ES7 Async/Await

// const myFn = async () => {
//   try {
//     const response = await wait(3000, 'woda sie zagotowala');
//     const response2 = await wait(6000, 'kawa jest zdatna do picia')
//     console.log(response2);
//   } catch(error) {
//     console.error(error)
//   }
// }

// myFn()


// Zapytania na BE

const list = document.querySelector('#list');

fetch('http://localhost:3003/cars')
  .then(response => {
    return response.json()
  })
  .then(cars => {
    // console.log(cars)
    // Tutaj sie powinno zadziac dodanie samochodu do HTML
    cars.forEach(car => {
      list.innerHTML += `<li> ${car.Name} </li>`
    })
  })
  .catch(error => {
    console.log(error);
  })