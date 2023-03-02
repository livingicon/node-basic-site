
const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => { // 1. create a node server
  // const q = url.parse(req.url, true);
  // const filename = `. ${q.pathname}`;
  // 2. get the requested url
  const { pathname } = url.parse(req.url);
  // 3. readFile
  fs.readFile(filename, (err, data) => {
    if(err) {
      res.writeHead(404, {'Content-type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);