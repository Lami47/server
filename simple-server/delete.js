var fs = require('fs');

fs.unlink('mynewfile1.html', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});