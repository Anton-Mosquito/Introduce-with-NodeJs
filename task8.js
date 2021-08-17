const fileSystem = require('fs');

for (let index = 1; index < 3; index++) {
    fileSystem.unlink(`folder/notes${index}.txt`, (err) => {
        if(err) throw err;
                
    })
     console.log('done');
}
