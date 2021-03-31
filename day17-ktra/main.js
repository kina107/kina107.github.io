//Bai 1
function sumAll(x, y) {
    if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
        return `Please insert two integers`;
    } else {
        let numbers = [];
        for (var i = x + 1; i < y; i++) {
            numbers.push(i);
        }
        console.log(numbers);
        let sum = 0;
        for (var i in numbers) {
            sum += numbers[i];
        }
        return sum;
    }
}

//Bai 2
function spinalCase(str) {
    let newStr = '';
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
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

//Bai 4
function snail(h, x, y) {
    if (h < 0 || x < 0 || y < 0) {
        return `Invalid inputs`;
    } else {
        let days;
        days = h/(x-y);
        console.log(`Sau ${days} ngày thì ốc sẽ leo được ${h} m`); 
    }
}

//Bai 5
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

//Bai 6
let body = document.querySelector("body");
let color = document.getElementById("hexCode");

function changeBGColor() {
    let randomColor = "";
    let letters = "0123456789abcdef"
    for (i = 0; i < 6; i++) {
        randomColor = randomColor + letters[Math.floor(Math.random() * 16)];
    }
    color.innerHTML = "#" + randomColor;
    body.style.backgroundColor = "#" + randomColor;
}


