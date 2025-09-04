// done 30 bài


/* //Bài 1: Tổng 2 số nguyên a và b
document.write('Bài 1: Tổng 2 số nguyên a và <br><br>')
let a = parseInt(prompt('Nhập vào số a'))
let b = parseInt(prompt('Nhập vào số b'))
document.write(`tổng 2 số nguyên a và b = ${a+b}<br><br>`) */


/* //Bài 2: Chu vi và diện tích hình tròn
document.write('Bài 2: Chu vi và diện tích hình tròn<br><br>')
let r = parseInt(prompt('Nhập bán kính hình tròn'))
let Pi = Math.PI
document.write(`Chu vi hình tròn = ${r * 2 * Pi}<br><br>`)
document.write(`Diện tích hình tròn = ${r * r * Pi}<br><br>`) */


/* //Bài 3: Chuyển độ C sang độ F
let c = parseInt(prompt('Bao nhiêu độ C ?'))
document.write(`${c} độ C bằng ${(c*(9/5))+32} độ F<br><br>`) */


/* //Bài 4: Chuyển độ F sang độ C 
let f = parseInt(prompt('Bao nhiêu độ F ?'))
document.write(`${f} độ F bằng ${((f-32)*(5/9))} độ C<br><br>`) */


/* //Bài 5: Kiểm tra số chẵn
let a = parseInt(prompt('Nhập vào số a'))
document.write(`Số ${a} là số ${isNaN(a) ? 'không hợp lệ' : (a % 2 === 0 ? 'chẵn' : 'lẻ')}`) */


/* //bài 6: Kiểm tra số nguyên tố
let a = parseInt(prompt('Nhập vào số a'))
if (a <= 1) {
    document.write(`Số nguyên <= 1 không phải là số nguyên tố<br><br>`)
} else {
    let count = 0
    for (i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            count++
        } 
    }
    document.write(`Số ${a} ${count === 0 ? 'là số nguyên tố' : 'không phải là số nguyên tố'}<br><br>`)
} */
    

/* //bài 7: Đảo ngược 1 chuỗi nhập vào
let str = prompt('Nhập vào 1 chuỗi') 
let reverse_str = str.split('').reverse().join('');
document.write(`Đảo ngược chuỗi: ${reverse_str}<br><br>`) */


/* //bài 8: Kiểm tra năm nhuận
let year = parseInt(prompt('Nhập vào năm bất kỳ'))
document.write(`Năm ${year} ${isNaN(year) ? 'nhập không hợp lệ' : ( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 'là năm nhuận' : 'không phải là năm nhuận')}`) */


/* //Bài 9: lấy kí tự đầu và cuối của chuỗi
let str = prompt('Nhập vào chuỗi kí tự')
document.write(`Kí tự đầu và cuối của chuỗi đã lấy ra: ${str.slice(0, 1) + ' ' + str.slice(-1)}<br><br>`) */


/* //Bài 10: Tính giai thừa của 1 số nguyên dương
let a = parseInt(prompt('Nhập vào số nguyên dương'))
let equal = a
if (isNaN(a) || a < 0) {
    document.write(`Số đã nhập không hợp lệ<br><br>`)
} else {
    for (let i = a - 1; i > 0; i--)  {
        equal *= i
    }
    document.write(`Giai thừa của ${a} = ${equal}<br><br>`)
} */


/* //Bài 11: Kiểm tra số chính phương
let a = parseInt(prompt('Nhập vào số bất kì'))
document.write(`Số nguyên dương ${a} ${isNaN(a) ? 'đã nhập không hợp lệ' : ( Math.sqrt(a) * Math.sqrt(a) == a ? 'là số chính phương' : 'không phải là số chính phương')}<br><br>`) 
 */


/* //Bài 12: Đếm số chữ số trong một số nguyên. 
let a = parseInt(prompt('Nhập vào số bất kì'))
let original = a
let count = 0
while (a != 0) {
    a = Math.floor(a / 10); // Chia lấy phần nguyên để loại bỏ chữ số cuối
    count++;
}
document.write(`Có ${count} chữ số trong số ${original}<br><br>`) */


/* //Bài 13: Tính tổng các chữ số của một số nguyên
let a = parseInt(prompt('Nhập vào số nguyên dương'));
let sum = 0;
if (isNaN(a)) {
    document.write(`Số đã nhập không hợp lệ, không tính được<br><br>`)
} else {
    while (a > 0) {
        sum += a % 10;         // Lấy chữ số cuối và cộng vào tổng
        a = Math.floor(a / 10); // Bỏ chữ số cuối
    }
    document.write(`Tổng các chữ số trong số nguyên ${a} là ${sum}<br><br>`)
} */


/* //Bài 14: Kiểm tra chuỗi có phải là chuỗi Palindrome
let str = prompt("Nhập chuỗi:").toLowerCase().replace(/\s/g, '');
let isPalindrome = str === str.split('').reverse().join('');
document.write(`chuỗi ${str} ${isPalindrome ? "là chuỗi Palindrome" : "không phải chuỗi Palindrome"}`); */


// // Bài 15: Kiểm tra số Amstrong
// let number = parseInt(prompt("Nhập một số để kiểm tra số tự mãn:"));                                                                         
// function isArmstrong(num) {
//     let digits = num.toString().split('');
//     let power = digits.length;
//     let sum = 0;

//     for (let digit of digits) {
//         sum += Math.pow(parseInt(digit), power);
//     }

//     return sum === num;
// }
 
// if (isArmstrong(number)) {
//   document.write(`${number} là số tự mãn (Armstrong)`);
// } else {
//   document.write(`${number} không phải là số tự mãn (Armstrong)`);
// } 


/* // Bài 16: Tính lãi suất sau n tháng
let price = parseInt(prompt('Nhập số tiền gửi tiết kiệm'))
let ls = parseInt(prompt('Nhập lãi suất kì vọng'))
let n = parseInt(prompt('Nhập kỳ hạn dự kiến'))
document.write(`Tiền tiết kiệm tích luỹ dự kiến: ${price + (price*(ls/100)*(n/12))}`) */


/* //Bài 17: Đổi số giờ sang giây
let sec = parseInt(prompt('Nhập số giờ'))
while (isNaN(sec) || sec < 0) {
    sec = parseInt(prompt('Không hợp lệ, vui lòng nhập lại'))
}
document.write(`Đổi số giờ sang giây: ${sec*3600}`) */


/* //Bài 18: Kiểm tra 3 số tạo thành tam giác
let a = parseInt(prompt('Nhập số a'))
let b = parseInt(prompt('Nhập số b'))
let c = parseInt(prompt('Nhập số c'))
document.write(`Ba số đã nhập ${(a+b>c && a+c>b && b+c>a) ? 'đã' : 'không'} tạo thành tam giác`) */


/* //Bài 19: tính diện tích tam giác theo công thức heron
//Công thức heron: S = √[p(p - a)(p - b)(p - c)]
let a = parseInt(prompt('Nhập cạnh a'))
let b = parseInt(prompt('Nhập cạnh b'))
let c = parseInt(prompt('Nhập cạnh c'))
let p = (a+b+c) / 2
document.write(`Diện tích tam giác = ${Math.sqrt(p*(p-a)*(p-b)*(p-c))}`) */


/* // Bài 20: Đổi số nhị phân sang thập phân
let binary = prompt("Nhập số nhị phân:");
let decimal = parseInt(binary, 2);
document.write(`Số thập phân tương ứng là: ${decimal}`);
 */


/* // Bài 21: Đổi số thập phân sang nhị phân. 
let decimal = parseInt(prompt("Nhập số thập phân:"));
while (isNaN(decimal) || decimal < 0) {
    decimal = parseInt(prompt("Không hợp lệ! Nhập lại số thập phân không âm:"));
}

let binary = decimal.toString(2);
document.write(`Số nhị phân tương ứng là: ${binary}`); */


/* //Bài 22: Kiểm tra 2 số cùng dấu
let a = parseInt(prompt('Nhập số a bất kỳ'))
let b = parseInt(prompt('Nhập số b bất kỳ'))
while (isNaN(a)) {
    a = parseInt(prompt('Số a không hợp lệ, vui lòng nhập lại'))
}
while (isNaN(b)) {
    b = parseInt(prompt('Số b không hợp lệ, vui lòng nhập lại'))
}
document.write(`Hai số ${a} và ${b} đã nhập là ${(a > 0 && b > 0 || a < 0 && b < 0) ? 'hai số cùng dấu' : 'hai số khác dấu'}`) */


/* //Bài 23: Kiểm tra tuổi đã nhập là 18+
let tuoi = parseInt(prompt('Nhập vào số tuổi'))
while (isNaN(tuoi) || tuoi < 0) {
    tuoi = parseInt(prompt('Số a không hợp lệ, vui lòng nhập lại'))
}
document.write(`Đây là người ${tuoi > 18 ? 'lớn 18+' : 'dưới vị thành niên'}`) */


/* //bài 24: Kiểm tra số dương lơn hơn 0
let a = parseInt(prompt('Nhập số a bất kỳ'))
while (isNaN(a)) {
    a = parseInt(prompt('Số a không hợp lệ, vui lòng nhập lại'))
}
document.write(`Số ${a} đã nhập ${ a === 0 ? 'không phải là số dương hoặc số âm' : (a > 0 ? 'là số dương' : 'là số âm')}`) */


/* //Bài 25: Tính tổng các số chia hết cho 3 từ 1-> N
let a = parseInt(prompt('Nhập số a bất kỳ'))
let total = 0
for (let i = 1; i <= a; i++) {
    if (i%3===0) {
        total+=i
    }
    
}
document.write(`Tổng các số chia hết cho 3 từ 1 đến ${a} bằng ${total}`) */


/* //Bài 26: Các số chia hết cho 5 từ 1 đến N
let a = parseInt(prompt('Nhập số a bất kỳ'))
let count = 0
for (let i = 1; i <= a; i++) {
    if (i%5===0) {
        count++
    }
    
}
document.write(`Có ${count} số chia hết cho 5 từ 1 đến ${a}`) */


/* //Bài 27: Tổng bình phương các số chẵn trong mảng
let arr = []; // Khởi tạo mảng rỗng
let n = parseInt(prompt("Bạn muốn nhập bao nhiêu phần tử?"));

for (let i = 1; i <= n; i++) {
    let value = prompt(`Nhập phần tử thứ ${i}:`);
    arr.push(value); // Thêm phần tử vào mảng
}
let total = 0
for (let i = 1; i <= n; i++) {
    if (i%2===0) {
        total+=Math.pow(i,2)
    }
}
document.write(`Tổng các số chẵn đã được bình phương trong mảng = ${total}`); */


/* //Bài 28: Các số chia hết cho 7 từ 1 đến 100
let num = [] 
for (let i = 1; i <= 100; i++) {
    if (i%7===0) {
        num.push(i)
    }
}
document.write(`Các số chia hết cho 7 trong khoảng 1 đến 100 = ${num.join(', ')}`) */


/* //bài 29: Nhập số ngày trong tháng (kể cả tháng 2 năm nhuận)
let month = parseInt(prompt('Nhập tháng'))
let year = parseInt(prompt('Nhập năm'))
while(isNaN(month) || month < 0 || month > 12) {
    month = parseInt(prompt('Không nằm trong phạm vi các tháng trong năm, vui lòng nhập lại'))
}
while(isNaN(year)) {
    year = parseInt(prompt('Năm không hợp lệ, vui lòng nhập lại'))
}
switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.write(`Tháng ${month} năm ${year} có 31 ngày`)
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.write(`Tháng ${month} năm ${year} có 30 ngày`)
            break;
        default:
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                document.write(`Tháng ${month} năm ${year} có 29 ngày`)
                break;
            } else {
                document.write(`Tháng ${month} năm ${year} có 28 ngày`)
                break;
            }
} */


/* //bài 30: Kiểm tra 1 số hoàn hảo 
let a = parseInt(prompt('Nhập vào 1 số để kiểm tra'))
let test = []
for (let i = 1; i < a; i++) {
    if (a % i === 0) {
        test.push(i)
    }
}
let total = 0
for (let    ='?um of test) {
    total+=num    
}
if (a === total ) {
        document.write(`Số ${a} là số hoàn hảo`)
    } else {
        document.write(`Số ${a} không phải là số hoàn hảo`)
    } */

