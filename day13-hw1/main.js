/**
 *  Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
 */

 function kiemTraChuoiDoiXung(str){
    let reverseStr=""; 
    for(let i=str.length-1;i>=0;i--){
            reverseStr=reverseStr+str[i];
    }
    reverseStr = reverseStr.split(" ").join("").toLowerCase();
    let newStr = str.split(" ").join("").toLowerCase();

    if(newStr === reverseStr){
        return true;
    }else{
        return false;
    }
}

/**
 * Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Anh', age: 20 }. Viết hàm tính ra tuổi trung bình của toàn bộ sinh viên.
 */

const studentInfo = [
    {
        name: 'Anh',
        age: 22
    }, {
        name: 'Hoa',
        age: 26
    }, {
        name: 'Binh',
        age: 31
    }, {
        name: 'Loan',
        age: 24
    }
]

function avgAge(arrays) {
    let sum = 0;
    let avg = 0;
    for (let i of arrays) {
        console.log(i.age);
        sum = sum + i.age;
    }
    console.log("sum  ", sum);
    avg = sum / arrays.length;
    return avg;
}
console.log("avg", avgAge(studentInfo));

/**
 *  Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Anh'', age: 20 }. Viết hàm sắp mảng theo tuổi học viên từ cao đến thấp.
 */

let students = [
    {
        name: 'Anh',
        age: 22,
    }, {
        name: 'Hoa',
        age: 26,
    }, {
        name: 'Binh',
        age: 31,
    }, {
        name: 'Loan',
        age: 24,
    },
]

//  for ( let i of students){
//      console.log(i.age);
//  }
function sapXepTuoi(obj) {
    let min = obj[0];
    for (i = 0; i < obj.length; i++) {
      for (k = i + 1; k < obj.length; k++) {
        if (obj[i].age > obj[k].age) {
          min = obj[k];
          obj[k] = obj[i];
          obj[i] = min;
        }
      }
    }
    console.log(obj);
  }
  sapXepTuoi(students);

/**
 * Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
 */

function locChuoi(arrays){
    let max=arr[0].length;
    for( let i = 1; i < arr.length; i++){
        if( max< arr[i].length){
            max = arr[i].length;
        }
    }

    let array =[];
    for (i=0 ; i < arr.length; i++) {
        if( arr[i].length === max){
            array.push(arr[i]);
        }
    }
    return array;
}

/**
 * Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ''''
 */

 let values = [false,NaN,24,0,"",undefined,null,"ANBC",true]
 function giaTri(arr){
     let newArr =[];
     for(let i = 0;i<arr.length;i++){
         if(arr[i]) newArr.push(arr[i]);
     }
     return newArr
 }
 console.log(giaTri(values))