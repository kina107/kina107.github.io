// getElementById(tenID) để lấy ra phần tử có ID tương ứng
// innerHTML là nội dung của element HTML 
document.getElementById("demo").innerHTML = "Xin chao cac ban, toi la DOM"

// document.getElementsByClassName();// gọi theo tên class
// document.getElementsByTagName(); // p , h1, h2 tên của thẻ
// document.querySelector(); // . , #

let hello = document.getElementById("demo");
hello.innerHTML = "Hello World";
hello.style.color = "blue";
hello.style.textAlign = "center";
hello.style.backgroundColor = "yellow";

function pressOnClick() {
    hello.innerHTML = "Hi you";
    hello.style.color = "red";
}

// function fibonacciGenerator(n) {
//     let arr = [];
//     if (n === 1) {
//         arr = [0];       
//     } else if (n === 2) {
//         arr = [0, 1];        
//     } else {
//         arr = [0, 1];
//         for (let i = 2; i <n; i++) {
//             arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
//         }
//     }
//     return arr;
// }

