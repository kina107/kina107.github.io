/**
 * Vẽ hình chữ nhật đặc (kích thước mxn):
 */

function drawRectangle(m, n) {
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        return;
    }

    let str = "";
    // vẽ ngang
    for (let i = 0; i < n; i++) {
        // vẽ dọc
        for (let j = 0; j < m; j++) {
            str += "* ";
        }
        str += "<br>";
    }
    document.write(str);
}

drawRectangle(4, 5);

document.write("<br>");

/**
 * Vẽ hình chữ nhật rỗng:
 */

function drawEmptyRectangle(o, p) {
    if (o <= 0 || p <= 0 || Number.isInteger(o) === false || Number.isInteger(p) === false) {
        return;
    }

    let str1 = "";
    // ve dong 1
    for (let k = 0; k < o; k++) {
        str1 += "* ";
    }
    // ve dong giua
    for (let h = 0; h < p - 2; h++) {
        str1 += "<br>";
        for (let g = 0; g < o; g++) {
            if (g === 0 || g === o - 1) {
                str1 += "* ";
            } else {
                str1 += "* ".fontcolor("white");
            }
        }
    }

    // ve dong cuoi
    str1 += "<br>"
    for (let k = 0; k < o; k++) {
        str1 += "* ";
    }
    document.writeln(str1);
}

drawEmptyRectangle(4, 5);

// Vẽ tam giác vuông

document.write("<br>");
document.write("<br>");

function drawRightTriangle(x, y) {
    if (x <= 0 || y <= 0 || Number.isInteger(x) === false || Number.isInteger(y) === false) {
        return;
    }

    let str2 = "";
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            if (i >= j) {
                str2 += ("* ");
            }
        }
        str2 += "<br>";
    }

    document.writeln(str2);
}

drawRightTriangle(5, 5);

// Vẽ tam giác cân ngược

document.write("<br>");
document.write("<br>");

function drawEqualTriangle(n) {
    let str3 = "";
    for (let i = 0; i < n; i++) {
        // spaces
        for (let j = 0; j < i; j++) {
            str3 += "&nbsp;&nbsp;";
        }
        // star
        for (let k = 0; k < 2 * (n - i) - 1; k++) {
            str3 += "*";
        }
        str3 += "<br>";
    }
    document.writeln(str3);
}

drawEqualTriangle(4);
