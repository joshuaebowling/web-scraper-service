const
  net = require('net'),
  config = require('config'),
  JsonSocket = require('json-socket'),
  scraper = require('./scraper');

var socket;

const server = net.createServer(function(_socket) {
  socket = new JsonSocket(_socket);
});

server.on('connection', () => {
  socket.on('message', (data) => {
    scraper.scrape(data.url, data.instructions)
      .then((response) => {
        socket.sendMessage({ response: response });
      })
      .catch(e => console.log(e));
  });
});

server.listen(config.port, config.address);