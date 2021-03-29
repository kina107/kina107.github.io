let p = document.getElementsByTagName("p");
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3= document.getElementById("para3");
let content = document.getElementById("content");

function changeFontSize(){
    let newSize = prompt("Please enter a font size", "20px");
    content.style.fontSize = newSize;
}

function changeColor() {
    p[0].style.color = "green";
    p[1].style.color = "yellow";
    p[2].style.color = "red";
}

function copyContent() {
    para1.innerHTML = para2.innerHTML;
}

function changeBGColor() {
    content.style.backgroundColor = "#f2b4b4";
}

function increaseFontSize() {
    let value = prompt("Nhập vào đoạn văn bạn muốn thay đổi", "para1");
    let font = document.getElementById(value);
    let fontSizeNumber = getComputedStyle(font).getPropertyValue("font-size");
    let currentFont= parseFloat(fontSizeNumber);
    if (currentFont < 30) {
        font.style.fontSize = (currentFont + 5) +"px";
    }
}

function reset(){
    document.location.reload();
}


