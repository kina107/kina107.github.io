let array = [1, 2, 3];
let names;

names = ["An", "Anh", "Hieu", "Thinh"]

names.length; // dem so phan tu cua mang

// lay phan tu theo index
names[3];
console.log(names[1]);

// duyet mang nen dung for, ko nen dung do/do while

for (let i = 0; i < names.length; i++) {
    console.log(`Toi ten la ${names[i]}`);
}

for (let index in names) {
    console.log(`Index la ${index} va item la ${names[index]}`);
}

for (let item of names) {
    console.log(item);
}

// Phuong thuc voi mang
names.push("Quynh"); // dung ham push de them moi 1 phan tu vao mang
console.log(names);

array.pop(); // dung ham pop de lay ra (xoa) 1 phan tu cuoi mang
console.log(array);

// cho 1 mang so nguyen. ktra neu phan tu be hon 0 thi thay no = 0

function duyetMang(mang1) {
    for (let i in mang1) {
        if (mang1[i] < 0) {
            mang1[i] = 0;
        }
    }

    return mang1;

}

function drawSquare(n) {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            console.log("***");
        }
    }
}