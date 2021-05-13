// Celcius & Farenheit Degree Conversion
function doF (c) {
    return f = (c * 1.8) + 32;
}

let fToCConvert = doF (20);

console.log (fToCConvert);

function doC (f) {
    return c = (f -32) / 1.8;
}

let cToFConvert = Math.floor (doC (30));

console.log (cToFConvert);

// Chuyen doi tien te tu USD,EUR sang VND va nguoc lai

function usdToVnd(usd) {
   return vnd = 22986.22 * usd;
}

console.log (usdToVnd(200));

function vndToUsd(vnd) {
    return usd = vnd / 22986.22;
}

console.log (Math.floor (vndToUsd (200000)));

function eurToVnd(eur) {
    return vnd = 27475.98 * eur;
}

console.log (eurToVnd(300));

function vndToEur(vnd) {
    return eur = vnd / 27475.98;
}

console.log (Math.floor (vndToEur (250000)));

//Tinh the ky cua 1 nam

function theKy (nam) {
    return ((nam -1) / 100) + 1;
}
let T = Math.floor(theKy (2021));
console.log(T);