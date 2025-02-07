const { stdin, stdout } = require('node:process');
const readline = require('node:readline');

const rl = readline.createInterface({
    input:stdin,
    output:stdout,
});

let A, B, C;

rl.question('Enter the x^2 : ', answerX2 =>{
    A = parseFloat(answerX2);
    rl.question('Enter the x : ', answerX => {
        B = parseFloat(answerX);
        rl.question('Enter the c : ', answerC =>{
            C = parseFloat(answerC);

            const X1 = (-B + Math.sqrt(B*B - 4 * A * C)) / (2 * A);
            const X2 = (-B - Math.sqrt(B*B - 4 * A * C)) / (2 * A);
            console.log(`The X1 is ${X1}`);
            console.log(`The X2 is ${X2}`);
            rl.close();
        })
    })
})