const { stdin, stdout } = require('node:process');
const readline = require('node:readline');

const rl = readline.createInterface({
    input:stdin,
    output:stdout,
});

let length;
let width;

rl.question('Enter the length of the rectangle: ', answerLength =>{
    length = parseFloat(answerLength);
    rl.question('Enter the width of the rectangle: ', answerWidth => {
        width = parseFloat(answerWidth);
        const area = length * width;
        console.log(`\nThe area of the rectangle is ${area}`)
        const k = 2 * (width + length);
        console.log(`The k of the rectangle is ${k}`)
        rl.close()
    })
})