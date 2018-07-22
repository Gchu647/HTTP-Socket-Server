let net = require('net');
//Need to add in an elseif for HEAD
if(process.argv[2] === 'GET') {
  var requestMethod = process.argv[2];;
  var requestURI = process.argv[3];

} else { //When a method is not enterd
  var requestMethod = 'GET';
  var requestURI = process.argv[2];
}


// Set different port and host for localhost and other web server
if(requestURI.indexOf('localhost') > -1) {
  var port = 8640;
  var host = "localhost";
} else if(requestURI.indexOf('www') > -1) {
  var port = 80;
  var host = requestURI;
}

// Need to update url instead of "/" FIX THIS!!!!!
let requestHeader = `${requestMethod} / HTTP/1.1
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
});

// Our server port 8640