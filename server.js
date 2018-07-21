const net = require('net');
const hydro = require('./hydro_data');
const helium = require('./helium_data');
const incorrect = require('./incorrect_path');
const homePage = require('./homepage_data');


let server = net.createServer(function(socket) {
  console.log("A client is connected");
  socket.setEncoding('UTF8');

  socket.on('data', function(request) {
    let resource = request.split(' ', 2)[1];
    console.log(resource);
    socket.write(homePage.content);

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


`GET / HTTP/1.1
cache-control: no-cache
Postman-Token: b7647b5d-255f-4a55-9677-b3148277cc95
User-Agent: PostmanRuntime/7.1.5
Accept: */*
Host: localhost:8640
accept-encoding: gzip, deflate
Connection: keep-alive`