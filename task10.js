const fileSystem = require('fs');
const array = ['folder2','folder3','folder4','folder5'];

// for (const iterator of array) {
//     fileSystem.mkdir(`folder/embedded folder/${iterator}`, (err) => {
//     if(err) throw err
// });
// }

// fileSystem.mkdir('folder1', (err) => {
//     if(err) throw err
// });

// setTimeout(() => {
//     fileSystem.rmdir('folder/embedded folder/folder3', (err) => {
//         if(err) throw err
//     });
// }, 3000);

fileSystem.readdir('folder/embedded folder', (err, files) => {
    if( err) throw err;
    for (const iterator of files) {
        fileSystem.unlink(`folder/embedded folder/${iterator}`, (err) => {
            if(err) throw err
        });
    }
})