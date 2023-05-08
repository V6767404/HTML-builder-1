const fs = require('fs');
const path = require('path');

let writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
let { stdout, stdin, exit } = require('process');

stdout.write('Input your text (to finish type exit or press Ctrl+C):\n');
stdin.on('data', (input) => {
  if (input.toString().trim() === 'exit') {
    exitFunc();
  }
  writeStream.write(input);
});

process.on('SIGINT', exitFunc);
function exitFunc() {
  stdout.write('Hasta la vista!');
  exit();
}