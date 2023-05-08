const fs = require('fs');
const path = require('path');

let stream = fs.ReadStream(path.join(__dirname, 'text.txt'));
stream.pipe(process.stdout);
