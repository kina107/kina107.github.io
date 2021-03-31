function sumAll(x, y) {
    let numbers = [];
    for (var i = x + 1; i < y; i++) {
        numbers.push(i);
    }
    console.log (numbers);
    let sum = 0;
    for (var i in numbers) {
        sum += numbers[i];
    }
    return sum;

}

function spinalCase(str) {
    let newStr = '';
    let arr = str.split('');
    for (let i = 0; i < arr.length; i += 1) {
        if (i > 0) {
            if (arr[i] >= 'A' && arr[i] <= 'Z') {
                if (arr[i - 1] >= 'a' && arr[i - 1] <= 'z') {
                    newStr += '-';
                    newStr += arr[i].toLowerCase();
                    continue;
                }
            }
            else if (arr[i] === ' ' || arr[i] === '_') {
                newStr += '-';
                continue;
            }
        }
        newStr += arr[i].toLowerCase();
    }
    return newStr;
}

function sortNumbers(n) {
    let arrayOfN = Array.from(String(n), Number);
    let newArr = arrayOfN.sort(function (a, b) { return a - b });
    if (newArr[0] === 0) {
        return `Du lieu khong hop le`;
    } else {
        n = Number(newArr.join(''));
    }
    console.log(n);
}


let body = document.querySelector("body");



