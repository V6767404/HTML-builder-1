const fs = require('fs');
const path = require('path');
const cssDir = path.join(__dirname, 'styles');

fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'),
    '',
    (err) => {
        if (err) throw err;
    }
);

fs.readdir(cssDir, { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    for (let i = 0; i < files.length; i += 1) {
        if (files[i].isFile() && path.extname(files[i].name) === '.css') {
            const stream = fs.createReadStream(path.join(cssDir, files[i].name), 'utf-8');
            let data = '';
            stream.on('data', chunk => data += chunk);
            stream.on('end', () => {
                fs.appendFile(
                    path.join(__dirname, 'project-dist', 'bundle.css'),
                    data,
                    err => {
                        if (err) throw err;
                    }
                );
            })
        }
    }
});