const fileSystem = require('fs');

// fileSystem.truncate('files/readme.txt', 1, err => {
//     if(err) throw err;
//     console.log('cleaning');
// })

let interval = setInterval(() => {
    for (let index = 1; index <= 100; index++) {
        if(index === 100) clearInterval(interval)
        fileSystem.writeFile(`./files/readme.txt`, `${index}`, (err) => {
            if(err) throw err;
        });
        console.log(`${index} was writing`);
    }
}, 1000);
