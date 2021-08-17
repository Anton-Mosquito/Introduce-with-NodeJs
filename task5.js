const fileSystem = require('fs');

// fileSystem.readFile('./files/digit.txt', 'utf-8', (err, data) => {
//     if(err) throw err;

//     let digits = data.split('');
    
//     for (const iterator of digits) {
//         fileSystem.writeFile(`./files/${iterator}.txt`, `${Math.pow(iterator,2)}`, (err) => {
//             if(err) throw err;
//         })
//     }
//     console.log(digits);
//     console.log('done');
// });

// fileSystem.readFile('./files/notes.txt', 'utf-8', (err, data) => {
//     if(err) throw err;

//     console.log(data);
//     let result = data + `/n Translate into English /n` 
    
//     fileSystem.writeFile(`./files/notes.txt`, result, (err) => {
//         if(err) throw err;
//     })
//     console.log('done');
// });

// fileSystem.readFile('./files/digit.txt', 'utf-8', (err, data) => {
//     if(err) throw err;

//     const result = data.split(',').map(Number).reduce((currentValue, nextValue, index, selfArray) => (currentValue + nextValue) / selfArray.length);

//         fileSystem.writeFile(`./files/digits.txt`, `${result}`, (err) => {
//             if(err) throw err;
//         })
//     console.log('done');
// });