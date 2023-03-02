// Test
// const nodeTest = (message) => console.log(message);
// nodeTest('node is working');

const http = require('http'); // s?
const url = require('url');
const fs = require('fs');

http
  .createServer((req, res) => { // 1. create a node server
    const q = url.parse(req.url, true); // 2. get the url by parsing
    let filePath = `.${q.pathname === '/' ? '/index' : q.pathname}.html`;
      // console.log(filePath);

    fs.readFile(filePath, (err, data) => {
      console.log(filePath);

      if (err) {
        return fs.readFile('./404.html', (err, data) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
        })
      
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080, () => console.log('Listening on port 8080...'));