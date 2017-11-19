const
  net = require('net'),
  config = require('config');
  
const server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(config.port, config.address);