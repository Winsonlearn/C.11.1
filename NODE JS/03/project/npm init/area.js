const tambah = (a,b) => {
    return a+b;
}
const kurang = (a,b) => {
    return a-b;
}
const kali = (a,b) => {
    return a*b;
}
const bagi = (a,b) => {
    return a/b;
}
const modulus = (a,b) => {
    return a%b;
}
const l_segitiga = (a,t) =>{
    return a * t / 2;
}
const l_lingkaran = (r) =>{
    return 3.14 * r * r;
}
const l_persegi = (s) =>{
    return s * s;
}
const l_persegipanjang = (p,l) =>{
    return p*l;
}
const k_lingkaran = (r) =>{
    return 2 * 3.14 * r;
}


export{tambah, kurang, kali, bagi, modulus, l_lingkaran, l_persegi, l_persegipanjang, l_segitiga, k_lingkaran};