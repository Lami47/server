const fs = require('fs');
const http = require('http');
const url = require("url");
const hostname = '127.0.0.1';
const port = 3000;

// In-memory data store
let items = [];
let nextId = 1; // To generate unique IDs for items starting at 1
 
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
 
// Handle CRUD operations
if (parsedUrl.pathname === "/items") {
  switch (req.method) {
    case "GET":
      // READ all items
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(items));
      break;
 
    case "POST":
      // CREATE a new item
      let body = "";
      req.on("data", chunk => {
        body += chunk.toString(); // Convert Buffer to string
      });
      req.on("end", () => {
        const newItem = JSON.parse(body);
        newItem.id = nextId++;
        items.push(newItem);
        fs.writeFileSync("items.json", JSON.stringify(items, null, 2)); // write to items.json the content from NewItem and 
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newItem)); 
      });
    break; 
  default:
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed - Post/Create");
  }
  } else if (parsedUrl.pathname.startsWith("/items/")) {
  const id = parseInt(parsedUrl.pathname.split("/")[2], 10);
  const itemIndex = items.findIndex(item => item.id === id); 
  switch (req.method) {
    case "GET":
      // READ a specific item by ID
      if (itemIndex !== -1) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(items[itemIndex]));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Item not found - GetById");
      }
      break; 
    case "PUT":
      // UPDATE an existing item by ID
      let updateBody = "";
      req.on("data", chunk => {
        updateBody += chunk.toString();
      });
      req.on("end", () => {
        if (itemIndex !== -1) {
          const updatedItem = JSON.parse(updateBody);
          items[itemIndex].name = updatedItem.name;
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(items[itemIndex]));
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Item not found - UpdateById");
        }
      });
      break; 
    case "DELETE":
      // DELETE an item by ID
      if (itemIndex !== -1) {
        const deletedItem = items.splice(itemIndex, 1);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(deletedItem[0]));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Item not found - DeleteById");
      }
      break; 
    default:
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method Not Allowed");
    }
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});
 
// Start the server
server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}/items`);
});