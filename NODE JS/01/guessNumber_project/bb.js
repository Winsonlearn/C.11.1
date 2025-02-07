const inquirer = require('inquirer');

const min = 0;
const max = 100;
const numberToGuess = Math.floor(Math.random() * (100 - 0 + 1) + min);
const maxAttempts = 10;

console.log('Welcome to the Number Guessing Game!');

const playGame = (numberToGuess, attemptsLeft, username) => {
    if (attemptsLeft === 0) {
        console.log(`Sorry, you've run out of attempts! The number was ${numberToGuess}.`);
        return;
    }

    inquirer.prompt([
        {
            type: 'input',
            name: 'guess',
            message: `Guess a number between 1 and 100 (Attempts left: ${attemptsLeft}):`,
        },
    ]).then(answers => {
        const guess = parseInt(answers.guess);

        if (guess === numberToGuess) {
            console.log(`Congratulations! ${username} guessed the right number!`);
        } else{
            if (guess < numberToGuess) {
                console.log(`Too low! ${username}`);
            } else {
                console.log(`Too high! $ ${username}`);
            }
            playGame(numberToGuess, attemptsLeft - 1, username);
        }
    });
};


inquirer.prompt(
    [
        {
            type: 'input',
            name: 'username',
            message: `what's your name: `,
        },
    ]
).then(answers =>{
    const username = answers.username;
    playGame(numberToGuess, maxAttempts, username);
})