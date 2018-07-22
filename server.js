const net = require('net');
const homePage = require('./homepage_data');
const hydro = require('./hydro_data');
const helium = require('./helium_data');
const webStyle = require('./style_data');
const incorrect = require('./incorrect_path');


let server = net.createServer(function(socket) {
  process.stdout.write('A client is connected');
  socket.setEncoding('UTF8');

  socket.on('data', function(request) {
    let resource = request.split(' ', 2)[1]; //Takes out the resource from the long request string
    let index = resource.indexOf('/');
    let resourceSlice = resource.slice(index); //Removes whatevers was before '/'
    console.log('Request: ',request);
    console.log('Resources: ', resourceSlice);

    switch(resourceSlice) {
      case('/'):
        socket.write(homePage.content);
        break;
      case('/index.html'):
        socket.write(homePage.content);
        break;
      case('/hydrogen.html'):
        socket.write(hydro.content);
        break;
      case('/helium.html'):
        socket.write(helium.content);
        break;
        case('/css/styles.css'):
        socket.write(webStyle.content);
        break;
      default:
      socket.write(incorrect.content);
    }

    socket.destroy();
  });

})

server.listen(8640, 'localhost');

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