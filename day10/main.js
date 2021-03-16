/**
 * Câu điều kiện
 * dùng để kiểm tra
 * ===: kiểm tra về giá trị và dữ liệu
 * 
 */

//Kiểm tra n có lớn hơn 0

/*function checkN{
    if (n > 0) {
        console.log("n lon hon 0");
    }

    //Kiem tra n chan hay le

    if (n % 2 === 0) {
        console.log("n la so chan");
    } else { console.log("n la so le") }

    //n la so duong so am hay so 0

    if (n > 0) {
        console.log("n la so duong");
    } else if (n < 0) {
        console.log("n la so am");
    } else {
        console.log("n = 0")
    }
}

/**
 * 1. Viet ham kiem tra 2 so, tra so lon hon
 * 2. 
 * - Cho diem 3 mon toan ly hoa
 * - tinh diem trung binh mon va kiem tra xep loai hoc luc
 * -> diem trung binh =8 va <10: loai gioi
 * -> dtb =6.5 va <8: loai kha
 * -> dtb = 4 va <6.5: loai trung binh
 * -> dtb >0 va <4: loai Yeu
 * Tinh diem mon hoc theo thang diem 10
 */

 function soLonHon(a, b) {

    if (a > b) {
        console.log("a lon hon b");
        return a;
    }
    return b;
}

function diemTB(a, b, c) {
    if (a < 0 || b < 0 || c < 0 || a > 10 || b > 10 || c > 10) {
        console.log("Gia tri khong hop le")
        return;
    }
    let d = (a + b + c) / 3;
    if (d < 0 || d > 10) {
        return;
    }
    if (d < 4) {
        console.log("Hoc luc Yeu");
    } else if (d < 6.5) {
        console.log("Hoc luc Trung Binh");
    } else if (d < 8) {
        console.log("Hoc luc Kha");
    } else if (d < 10) {
        console.log("Hoc luc Gioi");
    }
}
function checkSo4() {
    let a = 2 + 2;

    switch (a) {
        case 3:
            console.log("small");
            break;
        case 4:
            console.log("equal");
            break;
        case 5:
            console.log("big");
            break;
        default:
            console.log("default");
    }
}

//Giải phương trình ax^2 + bx + c = 0.
function phuongtrinh(a, b, c) {
    if (a === 0) {
        return;
    }
    var delta = b * b - 4 * a * c;
    if (delta > 0) {
        var x1 = (-b - Math.sqr(delta)) / (2 * a);
        var x2 = (-b + Math.sqr(delta)) / (2 * a);
        console.log(`x1 = ${x1}, x2=${x2}`);

    }
    else if (delta === 0) {
        var x = -b / (2 * a);
        console.log("phuong trinh co nghiem kep la "+x);
    }
    else if (delta < 0) {
        console.log("phuong trinh vo nghiem")
        return;
    }
}
//cho ba canh a, b, c. kiem tra xem 3 canh co tao thanh 1 tam giac k. neu co thi tinh dien tich tam giac

function tamgiac(a,b,c){
    if (a<0||b<0||c<0){
        return;
    }
    
    if(a+b>c || a+c>b|| c+b>a){
        console.log("a,b,c la 3 canh cua tam giac");
        let p= (a+b+c)/2;
        let dientich = Math.sqrt(p*(p-a)*(p-b)*(p-c));
        return dientich;
    }
    else{
        return;
    }
}
 /**
 * Câu điều kiện
 * dùng để kiểm tra
 * ===: kiểm tra về giá trị và dữ liệu
 * 
 */

//Kiểm tra n có lớn hơn 0

/*function checkN{
    if (n > 0) {
        console.log("n lon hon 0");
    }

    //Kiem tra n chan hay le

    if (n % 2 === 0) {
        console.log("n la so chan");
    } else { console.log("n la so le") }

    //n la so duong so am hay so 0

    if (n > 0) {
        console.log("n la so duong");
    } else if (n < 0) {
        console.log("n la so am");
    } else {
        console.log("n = 0")
    }
}

/**
 * 1. Viet ham kiem tra 2 so, tra so lon hon
 * 2. 
 * - Cho diem 3 mon toan ly hoa
 * - tinh diem trung binh mon va kiem tra xep loai hoc luc
 * -> diem trung binh =8 va <10: loai gioi
 * -> dtb =6.5 va <8: loai kha
 * -> dtb = 4 va <6.5: loai trung binh
 * -> dtb >0 va <4: loai Yeu
 * Tinh diem mon hoc theo thang diem 10
 */

function soLonHon(a, b) {

    if (a > b) {
        console.log("a lon hon b");
        return a;
    }
    return b;
}

function diemTB(a, b, c) {
    if (a < 0 || b < 0 || c < 0 || a > 10 || b > 10 || c > 10) {
        console.log("Gia tri khong hop le")
        return;
    }
    let d = (a + b + c) / 3;
    if (d < 0 || d > 10) {
        return;
    }
    if (d < 4) {
        console.log("Hoc luc Yeu");
    } else if (d < 6.5) {
        console.log("Hoc luc Trung Binh");
    } else if (d < 8) {
        console.log("Hoc luc Kha");
    } else if (d < 10) {
        console.log("Hoc luc Gioi");
    }
}
function checkSo4() {
    let a = 2 + 2;

    switch (a) {
        case 3:
            console.log("small");
            break;
        case 4:
            console.log("equal");
            break;
        case 5:
            console.log("big");
            break;
        default:
            console.log("default");
    }
}

//Giải phương trình ax^2 + bx + c = 0.
function phuongtrinh(a, b, c) {
    if (a === 0) {
        return;
    }
    var delta = b * b - 4 * a * c;
    if (delta > 0) {
        var x1 = (-b - Math.sqr(delta)) / (2 * a);
        var x2 = (-b + Math.sqr(delta)) / (2 * a);
        console.log(`x1 = ${x1}, x2=${x2}`);

    }
    else if (delta === 0) {
        var x = -b / (2 * a);
        console.log("phuong trinh co nghiem kep la "+x);
    }
    else if (delta < 0) {
        console.log("phuong trinh vo nghiem")
        return;
    }
}
//cho ba canh a, b, c. kiem tra xem 3 canh co tao thanh 1 tam giac k. neu co thi tinh dien tich tam giac

function tamgiac(a,b,c){
    if (a<0||b<0||c<0){
        return;
    }
    
    if(a+b>c || a+c>b|| c+b>a){
        console.log("a,b,c la 3 canh cua tam giac");
        let p= (a+b+c)/2;
        let dientich = Math.sqrt(p*(p-a)*(p-b)*(p-c));
        return dientich;
    }
    else{
        return;
    }
}
