let day = new Date();
let currentYear = day.getFullYear();
let alertMsg = document.getElementById("alert");
let age;
function ageCount() {
    yearInput = document.getElementById("age").value;
    if (yearInput <= 0 || yearInput > currentYear) {
        alertMsg.innerHTML = "Invalid number!";
    } else {
        age = currentYear - yearInput;
        if (age > 120){
            alertMsg.innerHTML = "Sorry, your're dead...";
        } else {
            alertMsg.innerHTML = `You are ${age} year(s) old.`;
        }
    }
    
}