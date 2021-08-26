const fileSystem = require('fs');

function getAllFiles(folderName) {
    fileSystem.readdir(folderName, (err, files) => {
        if (err) throw err;

        //console.log(files);

        for (const iterator of files) {
            fileSystem.stat(`${folderName}/${iterator}`, (err, stats) => {
                if(err) throw err
    
                if(stats.isDirectory()) {
                    // fileSystem.unlink(`${folderName}/${iterator}`, (err) => {
                    //     if(err) throw err;
                                
                    // })
                    fileSystem.rmdir(`${folderName}/${iterator}`, (err) => {
                        if(err) throw err;
                                
                    })
                } else {
                    getAllFiles(`${folderName}/${iterator}`)
                }
            })
        }
    })
    
}

getAllFiles('folder');