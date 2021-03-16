/*Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm. Biết rằng:

- Mùa xuân từ tháng 1 đến tháng 3

- Mùa hè từ tháng 4 đến tháng 6

- Mùa thu từ tháng 7 đến tháng 9

- Mùa đông từ tháng 10 đến tháng 12 */

function thang() {
    var date = new Date();
    console.log(date.getDate());
    var m = date.getMonth() + 1;
    if (m < 1 || m > 12) {
        return;
    }
    if (m <= 3) {
        return `Thang ${m} la mua xuan`;
    } else if (m <= 7) {
        return `Thang ${m} la mua he`;
    } else if (m <= 9) {
        return `Thang ${m} la mua thu`;
    } else if (m <= 12) {
        return `Thang ${m} la mua xuan`;
    }
}

/**
 * Viết hàm trả về số ngày có trong 1 tháng.

Lưu ý: Với tháng 2 có 29 ngày nếu là năm nhuận, 28 ngày nếu là năm không nhuận.
 */

function kiemTraNamNhuan(y) {
    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
        return true;
    }

    return false;
}

function NgayThang(m, y) {
    if (m < 1 || m > 12 || y < 1) {
        return `Dữ liệu không hợp lệ`;
    }

    if (m === 4 || m === 6 || m === 9 || m === 11) {
        return `Thang ${m} nam ${y} co 30 ngay`;
    } else if (m === 2) {
        return kiemTraNamNhuan(y)
            ? `Thang ${m} nam ${y} co 29 ngay`
            : `Thang ${m} nam ${y} co 28 ngay`;
    } else {
        return `thang ${m} nam ${y} co 31 ngay`;
    }
}


/**
 *  In ra một chuỗi, 
 * nếu chuỗi có độ dài lớn hơn 10 ký tự thì thực hiện cắt chuỗi lấy 10 ký tự và hiển thị phía sau là dấu ba chấm (10 kí tự + ...)
 */



function catchuoi(n) {
    let x = n.length;
    let y = n.substring(0, 10);
    if (x > 10) {
        return `${y}...`;
    } else {
        return `${y}`;
    }
}

/**
 * Viết hàm có tính năng translate. Truyền vào hàm tên đất nước bạn muốn biết về lời chào ở nuớc họ: French, Hawaiian, Germany, Italy, Croatia. Nếu không nhập gì chúng tôi có thể cho rằng bạn muốn nói biết ở Việt Nam. Hàm sẽ in ra lời chào theo đất nước tương ứng.

Ví dụ nước Việt Nam có lời chào: "Xin chào"
 */

function translate(tenNuoc) {

    switch (tenNuoc) {
        case "French":
            console.log("Bonjour");
            break;
        case "Hawaiian":
            console.log("Aloha");
            break;
        case "Germany":
            console.log("Hallo");
            break;
        default: console.log("Xin chao");
    }
    
}