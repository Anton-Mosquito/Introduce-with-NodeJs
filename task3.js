const fileSystem = require('fs'); 

//
let text = fileSystem.readFileSync('./files/readme.txt', 'utf-8');
console.log(text);

fileSystem.readFile('./files/readme.txt', 'utf-8', (err, data) => {
    if(err) throw err;

    console.log(data);
});
console.log('!!!');