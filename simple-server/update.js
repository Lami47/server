var fs = require('fs');

fs.appendFile('mynewfile1.html', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});