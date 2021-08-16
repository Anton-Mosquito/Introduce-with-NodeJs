for (let index = 1; index < 10; index++) {
    console.log(index);
}

setInterval(() => {
    console.log(`!`);
}, 1000);

const timeFromDate = date => date.toTimeString().slice(0, 8);

setInterval(() => {
    console.log(timeFromDate(new Date()));
}, 1000);

let x = 1;
setInterval(() => {
    console.log(++x);
}, 1000);