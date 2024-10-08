const fs = require('fs');
const http = require('http');
const url = require("url");
const hostname = '127.0.0.1';
const port = 3000;

let x = fs.readFileSync('items.json');
let items = JSON.parse(x);

//find the highest id
if (Array.isArray(items)) {
    let highestId = items.reduce((max, item) =>{
      return item.id > max ? item.id : max; //if item.id is greater than max, item.id is return and vice versa
    }, 1);
    let nextId = highestId + 1; // To generate unique IDs for items starting at 1
  } else {
    console.error('items is not an array:', items);
  }

// let highestId = items.reduce((max, item) =>{
//   return item.id > max ? item.id : max; //if item.id is greater than max, item.id is return and vice versa
// }, 1); //initial value is 1

// Create the server
const server = http.createServer((req, res) => { 
    const parsedUrl = url.parse(req.url, true);


// Serve item.json for the root URL
if (parsedUrl.pathname === "/items" && req.method === "GET") {
  fs.readFile("items.json", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server error");
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  });
  return;
}
});

// for (let i = 1; i != items.id && i >= "100", i++;){
//   i++
//   console.log(i)
// }

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}/items`)
});