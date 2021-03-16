// Vong lap for
console.log("Vong lap for");
for (let m = 0; m < 10; m++) {
    console.log(m);
    if (m === 5) {
        break;
    }
}

// Vong lap While
console.log("Vong lap while");
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Vong lap while check dk truoc khi chay, vong lap do- while chay 1 lan trc khi check dk
console.log("Vong lap do-while");
let j = 10;
do {
    j--;
    if (j === 8) {
        console.log(" 8 chia het cho 2 ");
        continue;
    }
    console.log(j);
}
while (j > 0);

// Cho n, (n<50). Dem + Liet ke tat ca cac so chia het cho 5 trong khoang tu 0 den n

console.log("so chia het cho 5");

function boiSo5(n) {
    if (n < 0 && n > 50) {
        return;
    }

    let dem = 0;

    for (let i = 0; i <= n; i++) {
        if (i % 5 === 0) {
            console.log(i);
            dem++;
        }
    }

    console.log(`Co tat ca ${dem} so chia het cho 5`);
}