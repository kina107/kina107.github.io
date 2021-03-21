/**
 * Đếm số nguyên tố trong đoạn [a, b] 
 */
function countInteger(arr) {
    let count = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (Number.isInteger(arr[i]) === false) {
            continue;
        } else {
            count++;
        }
    }
    console.log(`Co ${count} so nguyen to trong doan tren`);
}

/**
 *  Chèn phần tử có giá trị X vào phía sau phần tử có giá trị lớn nhất trong mảng.
 */

function sortArr(arr1) {
    arr1.sort(function (a, b) { return a - b });
    arr1.push(10);
    console.log(arr1);
}

/**
 * Chèn phần tử có giá trị X vào mảng sao cho mảng vẫn có thứ tự tăng dần.
 */

function addX(arr2) {
    arr2.push(4);
    arr2.sort(function (a, b) { return a - b });
    console.log(arr2);
}

/*Kiểm tra tính đối xứng của một số. */

function doiXung(n){
    n = n + "";
    let reversedN = n.split("").reverse().join("");
    if ( n === reversedN ){
        return true;
    } else {
        return false;
    }
}

/**
 * Viết chương trình tính tiền cước TAXI. Biết rằng:

Giá cước khi mở cửa là 9.000 đồng/km.
Giá cước từ km đầu tiên cho đến km thứ 30 là 11.000 đồng/km.
Giá cước là 9.500 đồng/km tính từ km thứ 31.
Thời gian chờ: 20.000 đồng/tiếng.
 */

function taxiFare(km, h) {

    let baseFare = 9000;
    let firstFare = 11000;
    let secondFare = 9500;
    let waitingCost = 20000;
    let fare;

    if (km === 0 && h > 0) {
        fare = h * waitingCost;
    } else if (km < 1 && h === 0) {
        fare = km * baseFare;
    } else if (1 <= km <= 30 && h === 0) {
        fare = baseFare + (km * firstFare);
    } else {
        fare = baseFare + (30 * firstFare) + (km * secondFare);
    }
    console.log(fare);
}
