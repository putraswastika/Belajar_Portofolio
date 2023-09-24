const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  if (request.url === '/' && request.method === "GET") {
    fs.readFile('./index.html', (error, data) => {
      if (error) {
        response.end('Terjadi kesalahan dalam pembacaan file html')
      } else {
        response.end(data)
      }
    })

  } else if  (request.url === "/style.css" && request.method === "GET") {
    fs.readFile('./style.css', (error, data) => {
      if (error) {
        response.end('Terjadi kesalahan dalam pembacaan file CSS')
      } else {
        response.setHeader('Content-Type', 'text/css');
        response.end(data)
      }
    })
  } 

  else if  (request.url === "/img" && request.method === "GET") {
    fs.readFile('./img', (error, data) => {
      if (error) {
        response.end('Terjadi kesalahan dalam pembacaan file CSS')
      } else {
        response.setHeader('Content-Type', 'text/css');
        response.end(data)
      }
    })
  } 
  
  else {
    response.end("404 Not Found - Routes not exists")
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server sedang berjalan pada url dan port http://localhost:${PORT}`)
});
