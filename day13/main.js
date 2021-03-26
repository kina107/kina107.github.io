function doiXung(n) {
    let soMoi = 0;
    let temp = n;
    while (temp>0){
        let soTachRa = temp%10;
        soMoi=soMoi*10+soTachRa;
        temp=Math.floor(temp/10);
    }
    if(soMoi === n) {
        console.log(n + " la so doi xung");

    } else {
        console.log(n + " ko la so doi xung")
    }
}