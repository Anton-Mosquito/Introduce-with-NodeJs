const fileSystem = require('fs');
const data = "КИЇВ. 13 серпня. УНН. Місцеві жителі були евакуйовані з невеликих населених пунктів приблизно в 40 км на схід від Рима в п'ятницю, де спалахнула лісова пожежа, коли в італійській столиці зафіксували температуру повітря в 37 градусів за Цельсієм. Про це інформує УНН з посиланням на Reuters.";
const dataArray = ['web.txt', 'web1.txt', 'web2.txt', 'web3.txt'];

fileSystem.writeFile('./files/notes.txt', data, (err) => {
    if(err) throw err;
    console.log('This file been saved');
})

dataArray.forEach((el) => {
    const number = el.length === 7 ? 15 : 16; 
    const element = el.padStart(number, "./files/").trim();
    fileSystem.writeFile(element, data, (err) => { if(err) throw err })
})