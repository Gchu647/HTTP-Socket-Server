let net = require('net');
//Throw an error to show the proper way to do things.
//Both requestMethod and host cannot be empty

//Need to add in an elseif for HEAD
if(process.argv[2] === 'GET') {
  var requestMethod = process.argv[2];;
  var requestURI = process.argv[3];

} else { //When a method is not entered
  var requestMethod = 'GET';
  var requestURI = process.argv[2];
}

//Make sure a proper url is used by the requestHeader
var index = requestURI.indexOf('/');
var url = requestURI.slice(index);
console.log(index);
console.log(url);

// Set different port and host for localhost and other web server
if(requestURI.indexOf('localhost') > -1) {
  var port = 8640;
  var host = "localhost";
    
  if(requestURI === "localhost") { //When just localhost is inputed.
    url = '/index.html';
  }
} else if(requestURI.indexOf('www') > -1) {
  var port = 80;
  var host = requestURI;
  url = url + '/';
}

let requestHeader = `${requestMethod} ${url} HTTP/1.1
Date: ${new Date()}
Host: ${host}
Connection: keep-alive
User-Agent: client.js

`;

console.log('port ', port);
console.log('requestMethod: ', requestMethod );
console.log('requestURI:', requestURI);
console.log('host: ', host);

client = net.connect(port, host, function(){
  process.stdout.write('Connected to server!');
  client.write(requestHeader);
});

client.setEncoding('UTF8');

client.on('data', function(chunk) {
  process.stdout.write(chunk);
  client.destroy();
});

// Our server port 8640