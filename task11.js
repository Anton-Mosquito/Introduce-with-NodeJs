const fileSystem = require('fs');
let x = ['files', 'asdasd'];

fileSystem.stat('files/readme.txt', (err, stats) => {
    if (err) throw err
    console.log(stats);
    console.log(stats.isDirectory());
    console.log(stats.isFile());
    console.log(stats.size / 1024);
    console.log(stats.size / 1024 / 1024);
    console.log(stats.size / 1024 / 1024 / 1024);
})

for (const iterator of x) {
    fileSystem.access(`${iterator}`, err => {
        console.log(`${iterator} ${err ? 'does not exist' : 'exists'}`);
    })
}