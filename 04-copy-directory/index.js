const fs = require('fs');
const path = require('path');
const curPath = path.join(__dirname, 'files');
const targetPath = path.join(__dirname, 'files-copy');

const copyDir = () => {
  fs.readdir(targetPath, { withFileTypes: true }, (err, trgfiles) => {
    if (trgfiles) {
      trgfiles.forEach((file) => {
        fs.unlink(path.join(targetPath, file.name), (err) => {
          if (err) throw err;
        });
      });
    }
  });

  fs.mkdir(targetPath, { recursive: true }, (err) => {
    if (err) throw err;
  });

  fs.readdir(curPath, { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      fs.copyFile(path.join(curPath, file.name), path.join(targetPath, file.name), (err) => {
        if (err) throw err;
      });
    });
  });
};

copyDir();