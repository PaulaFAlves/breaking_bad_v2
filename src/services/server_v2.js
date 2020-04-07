const http = require('http')
const port = 9000
var fs = require('fs');

const data = require('./localApi.json')

const server = http.createServer((req, res) => {

  if (req.url == '/') {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ data }));
    res.end();

} else {
    res.end('Invalid request');
}

})

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:9000`)
  console.log('Para derrubar o servidor: ctrl + c');
})