const fileSystem = require('fs');

// fileSystem.copyFile('folder/new.txt', 'files/new.txt', err => {
//     if(err) throw err;
//     console.log('completed');
// })

for (let index = 1; index < 3; index++) {
    fileSystem.copyFile('folder/notes.txt', `folder/notes${index}.txt`, err => {
        if(err) throw err;
        console.log('completed');
    });
}

fileSystem.readFile(`folder/notes1.txt` , 'utf-8', (err,data) => {
    if(err) throw err;
    const result = Math.pow(+data,2)

    fileSystem.writeFile(`folder/notes1.txt`, `${result}`, (err) => {
        if(err) throw err;
                
    })
     console.log('done');
})
