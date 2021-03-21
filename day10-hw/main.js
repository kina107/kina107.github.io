/**
 * Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm. Biết rằng:

- Mùa xuân từ tháng 1 đến tháng 3

- Mùa hè từ tháng 4 đến tháng 6

- Mùa thu từ tháng 7 đến tháng 9

- Mùa đông từ tháng 10 đến tháng 12
 */

function monthSeason() {
    var d = new Date();
    var n = d.getDate();
    console.log(n);
    var m = d.getMonth() + 1;
    if (m < 1 || m > 12) {
        return;
    } else if (1 <= m <= 3) {
        console.log(`Thang ${m} la mua xuan`);
    } else if (4 <= m <= 6) {
        console.log(`Thang ${m} la mua he`);
    } else if (7 <= m <= 9) {
        console.log(`Thang ${m} la mua thu`);
    } else {
        console.log(`Thang ${m} la mua dong`)
    }
}

/**
 * Viết hàm trả về số ngày có trong 1 tháng.

Lưu ý: Với tháng 2 có 29 ngày nếu là năm nhuận, 28 ngày nếu là năm không nhuận.
 */

function kiemTraNamNhuan(y) {
    if (y % 4 === 0 && y % 100 !== 0 && y % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

function daysCount(x, y) {
    if (x < 1 || x > 12 || y < 1) {
        return `Du lieu khong hop le`;
    } else {
        if (x === 4 || x === 6 || x === 9 || x === 11) {
            return `Thang ${m} nam ${y} co 30 ngay`
        } else if (x === 2) {
            return kiemTraNamNhuan(y)
                ? `Thang ${m} nam ${y} co 29 ngay`
                : `Thang ${m} nam ${y} co 28 ngay`;
        } else {
            return `thang ${m} nam ${y} co 31 ngay`;
        }
    }
}

/**Tính tổng các chữ số trong 1 số nguyên dương. */

function calSum(number) {
    if (number < 0 || Number.isInteger(number) === false) {
        return;
    }
    let sum = 0;
    let res;
    while (number !== 0) {
        res = number % 10;
        sum += res;
        number = Math.floor(number / 10);
    }
    return sum;
}

/**
 *  In ra một chuỗi, nếu chuỗi có độ dài lớn hơn 10 ký tự thì thực hiện cắt chuỗi lấy 10 ký tự và hiển thị phía sau là dấu ba chấm (10 kí tự + ...)
 */

function modifyStr(str) {
    let x = str.length;
    if (x < 0) {
        return `Du lieu khong hop le`;
    }

    if (x < 10) {
        return str;
    } else {
        newStr = str.substring(0, 9);
        return `${newStr}...`;
    }
}

/**
 * Viết hàm có tính năng translate. Truyền vào hàm tên đất nước bạn muốn biết về lời chào ở nuớc họ: French, Hawaiian, Germany, Italy, Croatia. Nếu không nhập gì chúng tôi có thể cho rằng bạn muốn nói biết ở Việt Nam. Hàm sẽ in ra lời chào theo đất nước tương ứng.

Ví dụ nước Việt Nam có lời chào: "Xin chào"
 */

function translate(greetings) {
    let text;
    switch (greetings) {
        case "French":
            text = "Bonjour";
            break;
        case "Hawaiian":
            text = "Aloha";
            break;
        case "Germany":
            text = "Hallo";
            break;
        case "Italy":
            text = "Ciao";
            break;
        case "Croatia":
            text = "Bok";
            break;
        default:
            text = "Xin Chao";
    }
    console.log(text);
}
