document.write("Lam bai tap ve hinh");
document.write("<br>");
document.writeln("Bai 1 : Ve hinh chu nhat dac co kich thuoc mxn trong do m,n > 0");
document.write("<br>");

function drawRectangle(m, n) {
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Thong so dau vao khong hop le");
        return;
    }

    let str = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // document.write("*");
            str += "*";
        }
        str += "<br />";
    }
    console.log(str)
    document.writeln(str);
}


function drawEmptyRectangle(m, n) {
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Thong so dau vao khong hop le");
        return;
    }

    let str = "";

    // ve hang thu nhat
    for (let x = 0; x < m; x++) {
        str += "* ";
    }

    // ve hang giua
    for (let i = 1; i < n - 2; i++) {
        str += "<br>";
        for (let j = 0; j < m; j++) {
            if (j === 0 || j === m - 1) {
                str += "* ";
            } else {
                str += "* ".fontcolor("white");
            }
        }
    }

    // ve hang cuoi
    str += "<br>";
    for (let x = 0; x < m; x++) {
        str += "* ";
    }
    document.writeln(str);
}

drawEmptyRectangle(6, 5);

