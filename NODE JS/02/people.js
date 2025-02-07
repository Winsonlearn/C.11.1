const people = [
    'Andi',
    'Budi',
    'Cindy',
    'Dodi'
];

const ages = [20, 30, 40, 50];

const addNumber = (a, b) =>{
    return a+b;
}

const randomNumber = (n) =>{
    return Math.floor(Math.random() * n);
}

const yourName = (name) =>{
    return `Good Morning! ${name}`;
}

// console.log(people);
// module.exports = people;
module.exports = {people, ages, addNumber, randomNumber, yourName};