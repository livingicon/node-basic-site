// Test
// const nodeTest = (message) => console.log(message);
// nodeTest('node is working');

const http = require('http'); // s?
const url = require('url');
const fs = require('fs');

http
  .createServer((req, res) => { // 1. create a node server
    const q = url.parse(req.url, true); // 2. get the url by parsing
    let filePath = `.${q.pathname === '/' ? '/index' : q.pathname}.html`; // get dynamic filepath using parsed url pathname
      // console.log(filePath);

    fs.readFile(filePath, (err, data) => { // trigger listener (read the file for the filePath)
      console.log(filePath);

      if (err) { // if it doesn't load right
        return fs.readFile('./404.html', (err, data) => { // return the error page
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
        })
      
      } // else if it does read fine
      res.writeHead(200, { "Content-Type": "text/html" }); // return the proper file page
      res.write(data);
      return res.end();
    });
  })
  .listen(8080, () => console.log('Listening on port 8080...')); // create listener