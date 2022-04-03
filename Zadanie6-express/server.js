import express from 'express';
import fs from 'fs';

const fsp = fs.promises;

const app = express();

app.get('/', (req, res) => {
  fsp.readFile('./data/hello.txt', 'utf8')
    .then((file) => fsp.writeFile('./data/hello2.txt', file, 'utf8'))
    .then((resultFromPreviousPromise) => {
      console.log('success!');
    })
    .catch((error) => console.error(error));

  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('The app is running on port 5000');
});
