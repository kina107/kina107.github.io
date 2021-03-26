let p = document.getElementsByTagName("p");
function changeColor() {
    p[0].style.color = "green";
    p[1].style.color = "yellow";
    p[2].style.color = "red";
}
changeColor(p);

let y = document.querySelector("body");
function changeBGColor() {
    y.style.backgroundColor = "burlywood";
}

changeBGColor(y);

let a = document.getElementById("para1");
let b = document.getElementById("para2");
function copyContent() {
    a.innerHTML = b.innerHTML;
}

let q = document.querySelector("body");
function changeFontSize(x) {
    q.style.fontSize = parseInt(x) + "px";
}


