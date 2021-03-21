/**Tính tổng các chữ số trong 1 số nguyên dương.

  */

function tinhTong(number) {
    //kiem tra so dau vao
    if (number < 0 || Number.isInteger(number) == false) {
        return;
    }

    //tinh tong
    let tachSo;
    let tong = 0;
    for (; number != 0;) {
        tachSo = number % 10;
        tong += tachSo;
        number = Math.floor(number / 10);
    }
    return tong;
}

/**
 * Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N (số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó)
 */
function isPerfect(x) {
    let sum = 0;
    for (let i = 1; i <= a / 2; i++) {
        if (x % i === 0) {
            sum += i;
            console.log(i);
        }
    }
    if (sum === a) {
        return true;
    }
    return false;
}

function printPerfect(n) {
    for (let i = 1; i < n; i++) {
        if (isPerfect(i) == true) {
            console.log(i);
        }
    }
}

/** Tinh n!, n la so tu nhien. VD 3! = 1 x 2 x 3, 4! = 1 x 2 x 3 x 4 */
function giaiThua(n){
    if (n<0 || Number.isInteger(n) === false){
        return;
    }

    if ( n===0 || n===1 ){
        return 1;
    }

    let gt = 1;
    while ( n > 1 ) {
        gt = gt *= n;
        n--;
    }
    return gt;
}

/**
 * Tìm số nhỏ nhất và lớn nhất trong mảng số nguyên
 */
function minMax(arr){
    let min = arr[0];
    let max = arr[0];
    for (let i=0; i<arr.length; i++) {
        if(min > arr[i]){
            min = arr[i];
        }

        if(max < arr[i]){
            max = arr[i];
        }
    }
    console.log("Max: " + max);
    console.log("Min: " + min);
}
