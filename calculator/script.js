// Màn hình
let output = document.getElementById("output");
function pressedBtn(obj) {
    //Nút bấm
    let pressed = obj.innerHTML;
    //Khi bấm nút =
    if (pressed == "=") {
        output.innerHTML = eval(output.innerHTML);
    } else if (pressed == "AC") { //Khi bấm nút clear màn hình hiển thị về 0
        output.innerHTML = '0';
    } else {
        if (output.innerHTML == '0') {
            output.innerHTML = pressed;
        } else {
            output.innerHTML += pressed; // Nối chuỗi khi bấm các nút số
        }
    }
    //Khi bấm nút %
    if (pressed == "%") {
        let num = output.innerText;
        let value = parseInt(num.substring(0, num.length - 1));
        output.innerHTML = value * 0.01;
    }
}

//Khi bấm nút căn
function squareRoot() {
    let num = output.innerHTML;
    output.innerHTML = Math.sqrt(num);
}

//Khi bấm nút ! (giai thừa)
function factorial() {
    let num = output.innerHTML;
    if (num === 0 || num === 1) {
        output.innerHTML = 1;
    }
    let result = 1
    while (num > 1) {
        result = result *= num;
        num--;
    }
    output.innerHTML = result;
}

//Khi bấm nút bình phương
function toThePower() {
    let num = output.innerHTML;
    output.innerHTML = Math.pow(num,2);
}

//Khi bấm nút +/-
function plusMinusBtn() {
    let num = output.innerHTML;
    num = num * -1;
    output.innerHTML = num;
}




