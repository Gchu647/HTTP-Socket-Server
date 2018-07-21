let net = require('net');
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let client;
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.google.com");
oReq.send();
/*
client = net.connect({port: 8640}, function(){
  console.log("Connected to server!");

});
*/
