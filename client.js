let net = require('net');
let requestURI = process.argv[2];
let requestHeader = `GET ${requestURI} HTTP/1.1
Date: ${new Date()}
Host: localhost:8640
Connection: keep-alive
User-Agent: client.js
Accept: text/html, text/css

`;

console.log(process.argv[2]); //This will return the third argu you pass in the terminal.

client = net.connect({port: 8640}, function(){
  console.log("Connected to server!");
  client.write(requestHeader);
});