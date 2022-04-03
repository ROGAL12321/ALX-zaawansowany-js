const express = require('express');
const fs = require('fs');

const fsp = fs.promises;

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => fsp.readFile('data/users.json', 'utf-8')
  .then((users) => res.send(users)));

router.get('/:userId', (req, res) => {
  // console.log(req.params); - parametry ktore przychodza z requestu

  // Zadanie - napisz obsluge tej funkcji. Funkcja ma zwracac obiekt uzytkownika o ID rownego userId przekazanego w req.params

  fsp.readFile('data/users.json', 'utf8')
    .then((users) => {
      const jsUsers = JSON.parse(users);
      const currentUser = jsUsers.find((user) => user.id === parseInt(req.params.userId, 10));

      if (!currentUser) {
        return res.status(404).send({ message: 'Not Found' });
      }

      return res.send(currentUser);
    });
});

router.post('/', (req, res) => {
  // console.log(req.body) -> cialo POST

  if (!req.body || typeof req.body.name !== 'string') {
    res.status(400).send('Wrong format');
  }

  // 1. Odczytaj zawartosc pliku users.json
  // 2. Sparsuj to do obiektu js
  // 3. Uzyj metody push aby dodac obiekt (nadaj mu nowe ID za pomoca uuid)
  // 4. Zapisz plik do pliku users.json
  // 5. Zwroc utworzonego usera z jego ID

  // console.log(req.body);

  fsp.readFile('data/users.json', 'utf8')
    .then((users) => {
      const parsedUsers = JSON.parse(users);

      parsedUsers.push({
        id: parsedUsers[parsedUsers.length - 1].id + 1,
        name: req.body.name,
      });

      return fsp.writeFile('data/users.json', JSON.stringify(parsedUsers), 'utf8');
    }).then(() => {
      res.send(req.body);
    });
});

module.exports = router;
