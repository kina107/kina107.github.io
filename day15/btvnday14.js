let container = document.getElementById("container");
function changeFontSize() {
    let newFontSize = prompt("Nhap vao kich thuoc chu", "20px");
    container.style.fontSize = newFontSize;
}

let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");

function changeColor() {
    para1.style.color = "green";
    para2.style.color = "yellow";
    para3.style.color = "red";
}

function copyContent() {
    para1.innerHTML = para2.innerHTML;
}

function changeBGColor() {
    container.style.backgroundColor = "burlywood";
}

function increaseFontSize() {
    let value = prompt("Nhap vao doan van ma ban muon thay doi", "para1,para2,para3");
    let font = document.getElementById(value);
    let fontSizeNumber = getComputedStyle(font).getPropertyValue("font-size");
    let currentFont= parseFloat(fontSizeNumber);
    if (currentFont < 30) {
        font.style.fontSize = (currentFont + 5) +"px";
    }
}

function reset() {
    document.location.reload();
}