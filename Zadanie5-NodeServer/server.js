import http from 'http';
import fs from 'fs';

const fsp = fs.promises;

const server = http.createServer((request, response) => {
  if(request.url === '/cars') {
    if(request.method === 'GET') {
      return fsp.readFile('./data/cars.json', 'utf8')
        .then(jsonFile => {
          response.writeHead(200, { contentType: "application/json" })
          response.write((jsonFile))
          return response.end()
        })
        .catch(error => {
          console.error("File doesn't exist", error)
          response.writeHead(500, { contentType: "application/json" })
          response.write(JSON.stringify({ message: error }))
          return response.end()
        })
    }

    if(request.method === "POST") {
      return fsp.readFile('./data/cars.json', 'utf8')
        .then(jsonFile => {
          const jsObject = JSON.parse(jsonFile)

          const newCar = {
            id: 10,
            name: 'Lanos'
          }

          jsObject.push(newCar)

          return fsp.writeFile('./data/cars.json', JSON.stringify(jsObject), 'utf8')
            .then(() => {
              response.writeHead(200, { contentType: "application/json" })
              response.write(JSON.stringify(newCar))
              return response.end()
            })
        })
        .catch(error => {
          console.error("File doesn't exist", error)
          response.writeHead(500, { contentType: "application/json" })
          response.write(JSON.stringify({ message: error }))
          return response.end()
        })
    }
  }

  response.writeHead(404, { contentType: "application/json" })
  response.write(JSON.stringify({ message: 'Not found' }))

  response.end();
})

server.listen(3005);
console.log("Node web server is running on port 3005 (╯°□°)╯︵ ┻━┻")




