let net = require('net');
let requestURI = process.argv[2];
let requestHeader = `GET ${requestURI} HTTP/1.1
cache-control: no-cache
Client: b7647b5d-255f-4a55-9677-b3148277cc95
User-Agent: client.js
Accept: */*
Host: localhost:8640
accept-encoding: gzip, deflate
Connection: keep-alive
`;

console.log(process.argv[2]); //This will return the third argu you pass in the terminal.

client = net.connect({port: 8640}, function(){
  console.log("Connected to server!");
  client.write(requestHeader);
});

`GET ${requestURI} HTTP/1.1
cache-control: no-cache
Postman-Token: b7647b5d-255f-4a55-9677-b3148277cc95
User-Agent: PostmanRuntime/7.1.5
Accept: */*
Host: localhost:8640
accept-encoding: gzip, deflate
Connection: keep-alive`
