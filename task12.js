const fileSystem = require('fs');

let folderName = 'folder'

fileSystem.readdir(folderName, (err, files) => {
    if (err) throw err;
    console.log(files);
    for (const iterator of files) {
        fileSystem.stat(`${folderName}/${iterator}`, (err, stats) => {
            if(err) throw err

            if(stats.isDirectory()) {
                console.log(iterator);
            }
        })
    }
})
