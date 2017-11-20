const
  net = require('net'),
  config = require('config'),
  JsonSocket = require('JsonSocket'),
  scraper = require('./scraper');
  
const server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.on('connection', _socket => {
  var socket = new JsonSocket(_socket);
  socket.on('data', (data) => {
    scraper.scrape(data.url)
      .then((response) => socket.write({ reponse }, 'utf8'));
  });
  socket.pipe(socket);
});

server.listen(config.port, config.address);

module.exports = server;