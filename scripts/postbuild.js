const fs = require('fs');

const writeFile = (path, data) => {
  fs.writeFile(path, JSON.stringify(data), (err) => {
    if (err) throw err
  })
}

function postBuild(dirpath) {
  writeFile(`${dirpath}/../lib/esm/package.json`, {
    "type": "module",
  })
  writeFile(`${dirpath}/../lib/cjs/package.json`, {
    "type": "commonjs",
  })
}

postBuild(__dirname)
