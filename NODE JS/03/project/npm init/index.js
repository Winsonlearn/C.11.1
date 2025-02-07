import {tambah, kurang, kali, bagi, modulus, l_lingkaran, l_persegi, l_persegipanjang, l_segitiga, k_lingkaran} from '/Users/winson/Desktop/PROCOD-11/NODE JS/03/project/npm init/area.js';

let a = 10;
let b = 2;

console.log(`${a} + ${b} = ${tambah(a,b)}`);
console.log(`${a} - ${b} = ${kurang(a,b)}`);
console.log(`${a} * ${b} = ${kali(a,b)}`);
console.log(`${a} / ${b} = ${bagi(a,b)}`);
console.log(`${a} % ${b} = ${modulus(a,b)}`);
console.log(`r = ${a}, luas lingkaran = ${l_lingkaran(a)}`);
console.log(`r = ${a}, keliling lingkaran = ${k_lingkaran(a)}`);
console.log(`luas persegi, s = ${a} =  ${l_persegi(a)}`);
console.log(`p = ${a}, l = ${b}, luas persegi panjang = ${l_persegipanjang(a, b)}`);
console.log(`a = ${a}, t = ${b}, luas segitiga = ${l_segitiga(a, b)}`);

