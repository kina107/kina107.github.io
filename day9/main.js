console.log('Hello main.js');

// Chu thich 1 dong

/* Chu thich 
nhieu dong */

/**
 * 1.Number
 * -So nguyen, so thuc
 * Infinity
 * NaN ( not a number )
 * 
 */

/**
 * 2.String (chuoi)
 * 'Dat trong dau nhay don'
 * "Dat trong dau nhay kep"
 * `Dat trong dau backtick ${1+3}`
 */

/**
 * 3.Boolean
 * Chi co 2 gia tri dung hoac sai (true or false)
 * 
 */

/**
 * 4.null
 * null la 1 bien/ doi tuong trong, khong co gi 
 */

/**
 * 5.undefined
 * 1 bien hang so da dc khoi tao, chua dc gan gia tri
 */

// let a = 1;
// let b = 22;
// let name = "John";

// alert (`${name} + 1`);
// alert (`${name + 1}`);
// alert(`${name + a}`);
// alert(`a + b`)

/**
 * Function
 * 
 */

// function sendEmail() {
//     console.log("This is a function")
// }

// sendEmail()

// function getAMessage(from, message="Khong co noi dung") {
//     console.log(from + ":" + message);
// }

// getAMessage("Robin", "Hi")

// getAMessage("John");

// function getABox() {
//     return "This is a box";
// }

// let box = getABox();

console.log("Xin chao cac ban");

let X = "Hannah";
let sayHello = "Xin chao " + X;
console.log(sayHello);



X = `"Hannah"`;
let sayHi = "Xin chao " + X;
console.log(sayHi);



function tongHaiSo(a,b){
    return a + b;
}
let c = tongHaiSo(1,2);
console.log(c);


function binhPhuong(p){
    return p * p;
}
let o = binhPhuong(6);
console.log(o);

function theKy (nam) {
    return (nam / 100) + 1;
}
let T = Math.floor(theKy (2021));
console.log(T);



