module.exports = {
content:`HTTP/1.1 404 Not Found
Server: localhost:8640
Date: ${new Date()}
Content-Type: text/html; charset=utf-8
Connection: keep-alive

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Element not found!</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <h1>404</h1>
  <h2>Element not found!</h2>
  <p>
    <a href="/">back</a>
  </p>
</body>
</html>`
};