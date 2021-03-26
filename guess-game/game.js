let random = Math.floor(Math.random() * 100);
let alertMessage = document.getElementById("alert");
let count = 0;
let resultMessage = document.getElementById("result");

// parseInt convert gia tri ve so nguyen
function onClick1() {
    let userNumber = parseInt(document.getElementById("number").value);
    console.log(random, userNumber);
    if (!Number.isInteger(userNumber)) {
        alertMessage.innerHTML = "Vui lòng nhập số!";
        alertMessage.style.color = "red";
    } else {
        count++;
        if (userNumber > random) {
            alertMessage.innerHTML = "Số bạn đoán quá lớn!";
        } else if (userNumber < random) {
            alertMessage.innerHTML = "Số bạn đoán quá nhỏ!";
        } else {
            alertMessage.innerHTML = "Chúc mừng bạn đã đoán đúng!";
        }
    }

    resultMessage.innerHTML += `Lần đoán thứ ${count} có giá trị là ${userNumber} <br>`;

    if (count >= 10) {
        resultMessage.innerHTML += `Bạn đã đoán hết lượt!`;
        document.getElementById("guess").disabled = true;
    }
}

function resetPage(){
    document.location.reload();
}