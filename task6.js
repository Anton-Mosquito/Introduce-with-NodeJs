const fileSystem = require('fs');

fileSystem.rename('files/new.txt', 'readme.txt', err => {
    if(err) throw err;
    console.log('completed');
})