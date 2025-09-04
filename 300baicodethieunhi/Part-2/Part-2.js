//done 30 bài


/* //Bài 1: Tổng các số từ 1 đến N
let n = parseInt(prompt('nhập vào số N'))
let total = 0
for (let i = 0; i <= n; i++) {
    total+=i
}
document.write(`Tổng các số từ 1 đến ${n} bằng ${total}`) */


/* //bài 2: In bảng cử chương của 1 số
let n = parseInt(prompt('bảng cửu chương mấy ?'))
while(isNaN(n)) {
    alert('Không hợp lệ, vui lòng nhập lại')
    n = parseInt(prompt('bảng cửu chương mấy ?'))
}
document.write(`Bảng cửu chương ${n}<br><br>`)
for (let i = 1; i <= 10; i++) {
    document.write(`${n} * ${i} =  ${n*i}<br><br>`)
} */


/* //Bài 3: Tổng các số lẻ từ 1 đến nhỏ hơn N
let n = parseInt(prompt('nhập vào số N'))
let total = 0
for (let i = 0; i < n; i++) {
    if (i%2!==0) {
        total+=i
    }
}
document.write(`Tổng các số lẻ nhỏ hơn ${n} bằng ${total}`) */


/* //bài 4: Tính giai thừa bằng vòng lặp
let n = parseInt(prompt('nhập vào số N'))
while(isNaN(n) || n<0) {
    document.write('Số đã nhập không thể tính giai thừa, vui lòng nhập lại')
}
let gt = n
if(n === 0 || n === 1) {
    document.write(`Giai thừa của ${n} bằng 1`)
} else {
    for (let i = n-1; i > 0; i--) {
        gt*=i
    }
    document.write(`Giai thừa của ${n} bằng ${gt}`)
} */


/* //Bài 5: Tính giai thừa bằng đệ quy
let num = parseInt(prompt("Nhập số nguyên dương để tính giai thừa:"));

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Điều kiện dừng
    } else {
        return n * factorial(n - 1); // Gọi đệ quy
    }
} */


/* //Bài 6: Tính số Fibonacci bằng vòng lặp
let n = parseInt(prompt("Nhập số n để tính số Fibonacci thứ n:"));

while (isNaN(n) || n < 0) {
  n = parseInt(prompt("Không hợp lệ. Nhập lại số nguyên không âm:"));
}

let a = 0, b = 1;

if (n === 0) {
  document.write(`F(${n}) = 0`);
} else if (n === 1) {
  document.write(`F(${n}) = 1`);
} else {
  for (let i = 2; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  document.write(`F(${n}) = ${b}`);
} */


/* //Bài 7: Tính số Fibonacci bằng đệ quy
function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

let n = parseInt(prompt("Nhập số n để tính số Fibonacci thứ n:"));
alert(`F(${n}) = ${fib(n)}`); */


/* //Bài 8: Đếm số lượng số nguyên tố nhỏ hơn N
let a = parseInt(prompt('Nhập số N nguyên dương'))
while(isNaN(a) || a<0) {
    a = parseInt(prompt('Không hợp lệ, vui lòng nhập lại số nguyên dương'))
}
if (a === 0 || a === 1) {
    document.write(`Số ${a} không phải là số nguyên tố`)
} else if (a === 2 || a === 3){
    document.write(`Số ${a} là số nguyên tố`)
} else {
    for (let i = 2; i < a; i++) {
        document.write(`Số ${a} ${a%i===0 ? 'không phải là' : 'là'} số nguyên tố `)
        break
    }  
} */


/* //Bài 9: In tam giác vuông bằng dấu *
var n = parseInt(prompt('Tam giác vuông có chiều cao bao nhiêu'))
	//xay dung do cao cua hinh tam giac
	for(i=0;i<n;i++) {
		//tao hang (row) *
		for(j=0;j<=i;j++) {
			document.writeln(" * ")
		}

		//xuong dong khi hien thi ket qua cua tung hang
		document.writeln("<br/>")
    } */


/* //Bài 10: In tam giác cân
var n = parseInt(prompt('Tam giác cân có chiều cao bao nhiêu'))
// Bắt đầu lặp qua từng hàng từ 0 đến n-1 (vì hàng đầu tiên tính từ 0)
for (i = n; i >= 0; i--) {
    // Bước 1: In khoảng trắng để đẩy ngôi sao vào giữa — số khoảng trắng giảm dần theo mỗi hàng
    // Ở hàng i, in ra (n - i - 1) khoảng trắng để căn giữa
    for (j = n - i; j > 0 ; j--) {
        document.write("&nbsp;&nbsp;"); // mỗi khoảng trắng in bằng HTML là 2 &nbsp; để căn đều
    }
    // Bước 2: In dấu * — số lượng dấu * tăng theo quy luật (hàng 0 có 1 sao, hàng 1 có 3 sao,...)
    // Tổng số dấu * mỗi hàng là: (2 * i + 1)
    for (k = 2 * i + 1; k > 0 ; k--) {
        document.write("*"); // in dấu sao
    }
    // Bước 3: Xuống dòng sau khi hoàn thành một hàng
    document.write("<br/>");
} */


/* //Bài 11: Vẽ hình chữ nhật bằng dấu #
let height = parseInt(prompt("Nhập chiều cao (số dòng):"));
let width = parseInt(prompt("Nhập chiều rộng (số cột):"));
let rectangle = "";
for (let i = 0; i < height; i++) {
  rectangle += "#".repeat(width) + "\n";
}
console.log(rectangle);
document.write(`<pre>${rectangle}</pre>`); */


/* //Bài 12: Bao nhiêu số hoàn hảo trong khoảng từ 1 đến N
let a = parseInt(prompt('Nhập vào số A: '))
let count = 0
for (let b = 1; b <= a; b++) {
    let test = []
    for (let i = 1; i < b; i++) {
        if (b % i === 0) {
            test.push(i)
        }
    }
    let total = 0
    for (let num of test) {
        total+=num    
    }
    if (b === total ) {
        count++
    }
    test = null
}
document.write(`Có ${count} số hoàn hảo trong khoảng từ 1 đến ${a}`) */


/* //Bài 13: Ước chung lớn nhất của 2 số
let a = parseInt(prompt('Nhập số a: '))
let b = parseInt(prompt('Nhập số b: '))
let sub = 0
if (a === b) {
    document.write('2 số bằng nhau, không thể tính UCLN')
} else if (a > b) {
    for (let i = 1; i <= a; i++) {
        if (a%i===0 && b%i===0) {
            sub = i
        }
    }
} else {
    for (let i = 1; i <= b; i++) {
        if (a%i===0 && b%i===0) {
            sub = i
        }
    }
}
document.write(`UCLN của ${a} và ${b} là ${sub}`) */


/* //Bài 14: Tìm BCNN của 2 số
let a = parseInt(prompt('Nhập số a: '))
let b = parseInt(prompt('Nhập số b: '))
let sub = a*b
if (a === b) {
    document.write('2 số bằng nhau, không thể tính UCLN')
} else {
    for (let i = 1; i <= sub; i++) {
        if (i%a===0 && i%b===0) {
            sub = i
        }
    }
}
document.write(`BCNN của ${a} và ${b} là ${sub}`) */


/* //bài 15: kiểm tra số thuận nghịch
let a = parseInt(prompt('Nhập số a để kiểm tra: ')) 
let sub = []
for (let i = 1; i <= a; i++) {
    if (i === parseInt(i.toString().split('').reverse().join(''))) {
        sub.push(i)
    }
}
document.write(`Các số thuận nghịch có trong khoảng từ 1 đến ${a} là ${sub.join(', ')}`) */


/* //Bài 16: Đếm các số chia hết cho 3 và 5
let a = parseInt(prompt('Nhập số a để kiểm tra: '))
let count = 0
for (let i = 1; i <= a; i++) {
    if (i%3===0 && i%5===0) {
        count++
    }
}
document.write(`Có ${count} số chia hết cho 3 và 5 trong khoảng từ 1 đến ${a}`) */


/* //Bài 17: Kiểm tra chuỗi nhị phân hợp lệ
let str = prompt('Nhập vào 1 chuỗi để kiểm tra')
let arr = str.split(" ").join("").split(""); 
isBreak = false
for (let sub of arr) {
    if (arr[sub] !== '0' && arr[sub] !== '1') {
        document.write('Chuỗi đã nhập không phải là chuỗi nhị phân');
        isBreak = true;
        break;
    }
}
// chỉ in khi vòng lặp không bị dừng giữa chừng
if (!isBreak) {
    document.write('Chuỗi đã nhập chính là chuỗi nhị phân');
} */


/* //Bài 18: Kiểm tra chuỗi chỉ chứa số
let str = prompt('Nhập vào 1 chuỗi để kiểm tra')
let arr = str.split(" ").join("").split(""); 
isBreak = false
for (let sub of arr) {
    parseInt(sub)
    if (isNaN(sub)) {
        document.write('Chuỗi số đã nhập không hợp lệ');
        isBreak = true;
        break;
    }
}
if (!isBreak) {
    document.write('Chuỗi số đã nhập hợp lệ');
} */


// // Bài 19: Tìm chữ cái xuất hiện nhiều nhất trong chuỗi
// let str = prompt("Nhập chuỗi bất kỳ:").toLowerCase().replace(/[^a-z]/g, "");
// // Loại bỏ mọi ký tự không phải chữ cái a–z bằng biểu thức chính quy /[^a-z]/g.//
// let freq = {}; 
// // Tạo một object rỗng để lưu tần suất xuất hiện của từng chữ cái. //
// for (let char of str) {
//   freq[char] = (freq[char] || 0) + 1;
// }
// /* 
//   Duyệt từng ký tự trong chuỗi (char).
//   Nếu freq[char] đã tồn tại thì cộng thêm 1.
//   Nếu chưa có, gán giá trị mặc định là 0 rồi cộng 1.
//   Kết quả là một object lưu số lần xuất hiện của từng chữ cái.
// */
// let maxChar = "";
// let maxCount = 0;
// // Khởi tạo biến lưu chữ cái xuất hiện nhiều nhất và số lần xuất hiện tương ứng. //
// for (let char in freq) {
//   if (freq[char] > maxCount) {
//     maxChar = char;
//     maxCount = freq[char];
//   }
// }
// /* 
//   Duyệt qua từng khóa (char) trong object freq.
//   Nếu freq[char] lớn hơn maxCount hiện tại,
//   thì cập nhật maxChar và maxCount bằng giá trị mới.
//   Kết thúc vòng lặp sẽ có được chữ cái xuất hiện nhiều nhất và số lần.
// */
// document.write(`Chữ cái xuất hiện nhiều nhất là: '${maxChar}' (${maxCount} lần)`);


/* //Bài 20: Các số chia hết cho 7 và nhỏ hơn 100
let count = 0 
for (let i = 1; i <= 100; i++) {
    if (i%7===0) {
        count++
    }
}
document.write(`Các số chia hết cho 7 trong khoảng 1 đến 100 = ${count}`) */


/* //Bài 21: In ác số chia hết cho 3 và 5 trong khoảng 1 đến 100
let num = [] 
for (let i = 1; i <= 100; i++) {
    if (i%3===0 && i%5===0) {
        num.push(i)
    }
}
document.write(`Các số chia hết cho 3 và 5 trong khoảng 1 đến 100 = ${num.join(', ')}`)
 */


/* // Bài 22: Viết hàm tính tổng mảng bằng đệ quy. 
// Nhập số lượng phần tử, đảm bảo là số nguyên dương
let n = parseInt(prompt("Nhập số lượng phần tử:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Vui lòng nhập lại:"));
}
// Nhập từng phần tử và đảm bảo đều là số
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
function sumArray(arr) {
  if (arr.length === 0) return 0; // Điều kiện dừng: mảng rỗng thì tổng là 0
  return arr[0] + sumArray(arr.slice(1)); // Cộng phần tử đầu với tổng phần còn lại
}
let total = sumArray(numbers);
document.write(`Tổng các phần tử trong mảng là: ${total}`); */


/* // Bài 23: Viết hàm tính độ dài chuỗi bằng đệ quy. 
function doDaiChuoi(str) {
  if (str === "") return 0; // điều kiện dừng: chuỗi rỗng thì độ dài là 0
  return 1 + doDaiChuoi(str.slice(1)); // bỏ đi ký tự đầu và đệ quy phần còn lại
}
let chuoi = prompt("Nhập chuỗi bất kỳ:");
let doDai = doDaiChuoi(chuoi);
document.write(`Độ dài của chuỗi là: ${doDai}`); */


/* //Bài 24: Đếm có bao nhiêu số nguyên tố trong mảng
let arr = []; // Khởi tạo mảng rỗng
let n = parseInt(prompt("Bạn muốn nhập bao nhiêu phần tử?"));
for (let i = 0; i < n; i++) {
  let value = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value) || value < 0) {
    value = parseInt(prompt('Không hợp lệ, vui lòng nhập lại số nguyên dương'));
  }
  arr.push(value); // Thêm phần tử vào mảng
}
let count = 0;
for (let sub of arr) {
  if (sub === 0 || sub === 1) {
    // không phải số nguyên tố -> bỏ qua
  } else if (sub === 2 || sub === 3) {
    count++;
  } else {
    // khai báo i trước cho cả vòng
    let i = 2;
    for (; i < sub; i++) {
      if (sub % i === 0) {
        break;
      }
    }
    // nếu i đã đi hết tới sub tức là không tìm được ước, nên là số nguyên tố
    if (i === sub) {
      count++;
    }
  }
}
document.write(`Có ${count} số nguyên tố trong mảng đã nhập.`); */


/* //Bài 25: Tổng các số nguyên tố trông khoảng từ a đến b
let a = parseInt(prompt('Nhập vào số a'))
let b = parseInt(prompt('Nhập vào số b'))
while (isNaN(a) || isNaN(b) && b <= a) {
    alert('Khoảng số từ a đến b không hợp lệ')
    a = parseInt(prompt('Nhập vào số a'))
    b = parseInt(prompt('Nhập vào số b'))
  }
let n = b - a
let arr = [];
for (let i = a; i <= b; i++) {
    let value = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
    while (isNaN(value) || value < 0) {
        value = parseInt(prompt('Không hợp lệ, vui lòng nhập lại số nguyên dương'));
    }
    arr.push(value);
}
let sum = 0;
for (let sub of arr) {
  if (sub === 0 || sub === 1) {
    // không phải số nguyên tố -> bỏ qua
  } else if (sub === 2 || sub === 3) {
    sum+=sub;
  } else {
    // khai báo i trước cho cả vòng
    let i = 2;
    for (; i < sub; i++) {
      if (sub % i === 0) {
        break;
      }
    }
    // nếu i đã đi hết tới sub tức là không tìm được ước, nên là số nguyên tố
    if (i === sub) {
      sum+=sub;
    }
  }
}
document.write(`Tổng các số nguyên tố trong mảng đã nhập = ${sum}`); */


// //bài 26: Đếm số Fibonacci từ 1 đến < N
// let n = parseInt(prompt("Nhập số n để tính số Fibonacci thứ n:"));
// while (isNaN(n) || n < 0) {
//   n = parseInt(prompt("Không hợp lệ. Nhập lại số nguyên không âm:"));
// }
// let a = 0, b = 1;
// document.write("Các số Fibonacci nhỏ hơn số thứ " + n + " là: ");
// if (n > 0) document.write(`${a} `);
// /* Nếu N > 0 thì in ra số 0 (F(0)) */
// if (n > 1) document.write(`${b} `);
// /* Nếu N > 1 thì in ra số 1 (F(1)) */
// while (true) {
//   let next = a + b;
//   /* Tính số Fibonacci tiếp theo bằng tổng 2 số trước đó */
//   if (next >= n) break;
//   /* Nếu số tiếp theo lớn hơn hoặc bằng N thì dừng vòng lặp */
//   document.write(`${next} `);
//   /* In ra số Fibonacci vừa tính được */
//   a = b;
//   b = next;
//   /* Cập nhật hai số trước đó cho lần tính kế tiếp */
// }


// //Bài 27: Vẽ hình thoi bằng kí tự
// let n = parseInt(prompt("Nhập chiều cao nửa trên của hình thoi (số nguyên dương):"));
// while (isNaN(n) || n <= 0) {
//   n = parseInt(prompt("Không hợp lệ! Nhập lại chiều cao dương:"));
// }
// // Vẽ n dòng trên (bao gồm cả dòng giữa – dòng rộng nhất)
// for (let i = 1; i <= n; i++) {
//   /* Tính số khoảng trắng bên trái để căn giữa sao
//      - Dòng đầu tiên (i = 1) sẽ có n - 1 khoảng trắng
//      - Dòng giữa (i = n) sẽ có 0 khoảng trắng */
//   let spaces = " ".repeat(n - i);
//   /* Tính số dấu * ở dòng i
//      - Dòng đầu tiên (i = 1) có 1 dấu *
//      - Dòng thứ 2 (i = 2) có 3 dấu *
//      - Công thức là: 2 * i - 1 */
//   let stars = "*".repeat(2 * i - 1);
//   // In ra dòng hiện tại: khoảng trắng + dấu *
//   console.log(spaces + stars);
// }
// // Vẽ n - 1 dòng dưới (đối xứng với phần trên, không vẽ lại dòng giữa)
// for (let i = n - 1; i >= 1; i--) {
//   /* Tương tự như phần trên, nhưng đảo ngược chiều:
//      - i giảm dần từ n-1 về 1
//      - dòng dưới cùng (i = 1) có n - 1 khoảng trắng, 1 dấu *
//      - dòng ngay dưới dòng giữa (i = n - 1) có 1 khoảng trắng, 2n - 3 dấu * */
//   let spaces = " ".repeat(n - i);
//   let stars = "*".repeat(2 * i - 1);

//   // In ra dòng hiện tại: khoảng trắng + dấu *
//   console.log(spaces + stars);
// }


/* //Bài 28: Kiểm tra mảng đối xứng
// Bước 1: Nhập số lượng phần tử mảng
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
// Bước 2: Nhập từng phần tử và đảm bảo là số (hoặc có thể là chuỗi nếu muốn)
let arr = [];
for (let i = 0; i < n; i++) {
  let val = prompt(`Nhập phần tử thứ ${i + 1}:`);
  // Nếu bạn chỉ muốn nhập số, dùng parseFloat + kiểm tra isNaN
  while (val.trim() === "") {
    val = prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`);
  }
  arr.push(val); // Có thể đổi thành parseFloat(val) nếu chỉ xử lý số
}
// Bước 3: Hàm kiểm tra đối xứng
function isSymmetric(arr) {
  return arr.join() === arr.slice().reverse().join();
}
// Bước 4: Xuất kết quả
if (isSymmetric(arr)) {
  document.write(`Mảng [${arr.join(', ')}] là mảng đối xứng.`);
} else {
  document.write(`Mảng [${arr.join(', ')}] không phải là mảng đối xứng.`);
} */


// //Bài 29: Tìm phần tử lớn thứ 2 trong mảng
// let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
// while (isNaN(n) || n <= 0) {
//   n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
// }
// let numbers = [];
// for (let i = 0; i < n; i++) {
//   let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
//   while (isNaN(value)) {
//     value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
//   }
//   numbers.push(value);
// }
// let unique = [...new Set(numbers)];
// /*
//   Bước 1: Dùng Set để loại bỏ phần tử trùng trong mảng arr.
//   [...new Set(arr)] chuyển Set thành mảng mới.
// */
// unique.sort((a, b) => b - a);
// /*
//   Bước 2: Sắp xếp mảng unique theo thứ tự giảm dần.
//   - sort() là hàm sắp xếp mặc định theo chuỗi. Tuy nhiên khi cung cấp hàm so sánh (compare function),
//     nó sẽ sắp xếp theo logic số học.
//   - Hàm so sánh: (a, b) => b - a
//     + Nếu kết quả âm: b < a → giữ nguyên vị trí.
//     + Nếu kết quả dương: b > a → đổi chỗ a và b.
//     + Nếu bằng 0: giữ nguyên.
// */
// // Bước 3: Lấy phần tử lớn thứ 2 (nếu tồn tại)
// if (unique.length < 2) {
//   document.write("Không có phần tử lớn thứ 2.");
// } else {
//   document.write(`Phần tử lớn thứ 2 là: ${unique[1]}`);
// }


/* //Bài 30: Tính tổng các số từ n về 1
let n = parseInt(prompt("Nhập số N ( nguyên dương ):"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại N (nguyên dương):"));
}
let sum = 0
for (let i = n; i > 0; i--) {
    sum+=i
}
document.write(`Tổng các số từ n đến 1 = ${sum}`)
 */

//Bài đặc biệt: In ra các phần tử trùng lặp trong mảng
let n = parseInt(prompt("Nhập số lượng phần tử của mảng thứ nhất:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let arr1 = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  arr1.push(value);
}
let m = parseInt(prompt("Nhập số lượng phần tử của mảng thứ hai:"));
while (isNaN(m) || m <= 0) {
  m = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let arr2 = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  arr2.push(value);
}
let o = parseInt(prompt("Nhập số lượng phần tử của mảng thứ ba:"));
while (isNaN(o) || o <= 0) {
  o = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let arr3 = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  arr3.push(value);
}
/* let arr = [...arr1,...arr2,...arr3]
document.write(`Các số có trùng lặp trong mảng là: ${arr.filter((item,index) => arr.indexOf(item) !== index)}`) */
let arr = [...arr1,...arr2,...arr3]
function numberdup(arr) {
  let count = {}
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1
  }
  let isDup = []
  let keys = Object.keys(count)
  for (let j = 0; j < keys.length; j++) {
    if (count[keys[j]] > 1) {
      isDup.push(count[keys[j]])
    }
  }
  return isDup
}
console.log(numberdup(arr));
