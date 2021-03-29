function convert() {
    let input = document.getElementById("number").value;
    let output = document.getElementById("output");
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let alertMessage = document.getElementById("alert");
    let result;
    console.log(input);
    console.log(from);
    console.log(to);
    if (input <= 0) {
        alertMessage.innerHTML = "Please enter a valid amount!";
        alertMessage.style.color = "red";
    } else {
        if (from === "USD") {
            if (to === "EUR") {
                result = input * 0.85;
            } else if (to === "GBP") {
                result = input * 0.73;
            } else if (to === "AUD") {
                result = input * 1.31;
            } else if (to === "VND") {
                result = input * 23082.50;
            }
        }

        if (from === "EUR") {
            if (to === "USD") {
                result = input * 1.18;
            } else if (to === "GBP") {
                result = input * 0.86;
            } else if (to === "AUD") {
                result = input * 1.54;
            } else if (to === "VND") {
                result = input * 27209.19;
            }
        }

        if (from === "GBP") {
            if (to === "USD") {
                result = input * 1.38;
            } else if (to === "EUR") {
                result = input * 1.17;
            } else if (to === "AUD") {
                result = input * 1.8;
            } else if (to === "VND") {
                result = input * 31812.42;
            }
        }

        if (from === "AUD") {
            if (to === "USD") {
                result = input * 0.76;
            } else if (to === "EUR") {
                result = input * 0.65;
            } else if (to === "GBP") {
                result = input * 0.55;
            } else if (to === "VND") {
                result = input * 17630.20;
            }
        }

        if (from === "VND") {
            if (to === "USD") {
                result = input * 0.000043;
            } else if (to === "EUR") {
                result = input * 0.000037;
            } else if (to === "GBP") {
                result = input * 0.000031;
            } else if (to === "AUD") {
                result = input * 0.000057;
            }
        }
    }
    result = result.toFixed(2);
    output.innerHTML = `${input} ${from} = ${result} ${to}`;
}


