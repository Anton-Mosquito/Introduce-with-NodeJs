const fileSystem = require('fs');

fileSystem.truncate('files/readme.txt', err => {
    if(err) throw err;
    console.log('cleaning');
})