let net = require('net');
let requestMethod = process.argv[2];
let requestURI = process.argv[3]; // Need to build in if statement to see if there is a GET, HEAD or nothing.
let requestHeader = `${requestMethod} ${requestURI} HTTP/1.1
Date: ${new Date()}
Host: ${requestURI}
Connection: keep-alive
User-Agent: client.js

`;
// Working on making our own port
let port = 8640;

if(requestURI.indexOf('www') > -1) {
  port = 80;
}

console.log("port ", port);
console.log(process.argv[2]);
console.log(process.argv[3]);

client = net.connect(port, requestURI, function(){
  process.stdout.write('Connected to server!');
  client.write(requestHeader);
});

client.setEncoding('UTF8');

client.on('data', function(chunk) {
  process.stdout.write(chunk);
});

// Our server port 8640