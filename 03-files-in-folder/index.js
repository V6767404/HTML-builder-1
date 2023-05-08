const fs = require('fs');
const path = require('path');
let folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    if (file.isFile()) {
      fs.stat(path.join(folderPath, file.name), (err, fileStat) => {
        if (err) throw err;
        console.log(path.basename(file.name, path.extname(file.name)) + ' - ' + path.extname(file.name).slice(1) + ' - ' + (fileStat.size / 1024).toFixed(3) + 'kb');
      });
    }
  });
});