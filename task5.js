const fileSystem = require('fs');

fileSystem.readFile('./files/digit.txt', 'utf-8', (err, data) => {
    if(err) throw err;

    let digits = data.split('');

    for (const iterator of digits) {
        fileSystem.writeFile(`./files/${iterator}.txt`, `${Math.pow(iterator,2)}`, (err) => {
            if(err) throw err;
        })
    }
    console.log('done');
});