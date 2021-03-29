

function bmiCalc() {
    let alertMsg = document.getElementById("alert");
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100;
    if (weight < 20 && weight > 200 && height < 1 && height > 2) {
        alertMsg.innerHTML = `invalid input`;
    } else {
        let bmi;
        bmi = Math.round(weight / (height * height));
        if (bmi < 18.5) {
            alertMsg.innerHTML = `Your BMI is ${bmi}, so you are underweight.`;
        } else if (18.5 < bmi < 24.9) {
            alertMsg.innerHTML = `Your BMI is ${bmi}, so you are normal.`;
        } else {
            alertMsg.innerHTML = `Your BMI is ${bmi}, so you are overweight.`;
        }
    }
}