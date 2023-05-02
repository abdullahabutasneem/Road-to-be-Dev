const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer(function (req, res) {
  if (req.url == '/' || req.url == '/index' || req.url == '/index.html') {
    fs.readFile('./public/index.html', function (err, data) {
      if (err) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("File Not Found");
        res.end('');
      }
      else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write(data);
        res.end('');
      }
    })
  }
  else if (req.url == '/about' || req.url == '/about.html') {
    fs.readFile('./public/about.html', function (err, data) {
      if (err) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("File Not Found");
        res.end('');
      }
      else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write(data);
        res.end('');
      }
    })
  }
  else if (req.url == '/contact' || req.url == '/contact.html') {
    fs.readFile('./public/contact.html', function (err, data) {
      if (err) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("File Not Found");
        res.end('');
      }
      else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write(data);
        res.end('');
      }
    })
  }
  else if (req.url == "/style.css") {
    fs.readFile('./public/style.css', function (err, data) {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(data);
      res.end('');
    })
  }
  else if (req.url == "/script.js") {
    fs.readFile('./public/script.js', function (err, data) {
      res.writeHead(200, { "content-type": "text/js" });
      res.write(data);
      res.end('');
    })
  }
  else {
    const data = fs.readFileSync('./public/error.html');
    res.writeHead(404, { "content-type": "text/html" });
    res.write(data);
    res.end('')
  }
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
