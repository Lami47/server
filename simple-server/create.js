var fs = require('fs');

fs.appendFile('mynewfile1.html', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});