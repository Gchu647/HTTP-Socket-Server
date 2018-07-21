const net = require('net');
const hydro = require('./hydro_data');


let server = net.createServer(function(socket) {
  console.log("A client is connected");
  socket.setEncoding('UTF8');

  socket.on('data', function(request) {
    // console.log(request);
    socket.write(hydro.content);

    socket.end();
  });

})

server.listen(8640);

/*
socket.write(
`HTTP/1.1 200 OK
Server: nginx/1.4.6 (Ubuntu) 
Date: ${new Date()}
Content-Type: text/html; charset=utf-8
Content-Length: 40489 
Connection: keep-alive

`);
*/