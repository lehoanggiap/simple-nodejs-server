var http = require('http');
http.createServer(function (req, res) {
  console.log("Ip address", req.socket.remoteAddress)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080);
console.log('Server running');
