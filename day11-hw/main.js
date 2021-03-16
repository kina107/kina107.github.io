/**
 * Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N (số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó)
 */

/**
 * Tìm số nhỏ nhất và lớn nhất trong mảng số nguyên
 */

let array1 = [1, 4, 6, 342, 56, 23, 9, 4566, 123, 104]
let maxNum = Math.max.apply(Math, array1);
let minNum = Math.min.apply(Math, array1);
console.log(maxNum);
console.log(minNum);

/**
 * Tìm số lớn thứ 2 trong mảng số nguyên
 */


let max = 0;
let secondMax = 0;

for (let i = 0; i < array1.length; i++) {
    if (array1[i] > max) {
        secondMax = max;
        max = array1[i];
    } else if (array1[i] > secondMax) {
        secondMax = array1[i];
    }
}

console.log(secondMax);

/**
 * In một chuỗi cho trước theo thứ tự ngược lại (Ví dụ: Hello in thành olleH)
 */

function reverse(str) {
    let reversedStr = "";
    for (let x = str.length - 1; x >= 0; x--) {
        reversedStr += str[x];
    }
    return reversedStr;
}

console.log(reverse("Hello"));

/**Sắp xếp mảng số nguyên theo chiều tăng dần và giảm dần.

  */

// tăng dần

array1.sort(function (a, b) { return a - b });
console.log(array1);

// giảm dần

array1.sort(function (a, b) { return b - a });
console.log(array1);
