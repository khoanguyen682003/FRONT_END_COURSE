// done 28 câu, 2 câu không biết làm

/* //Bài 1: Tìm phần tử lớn nhất trong mảng số
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
document.write(`Phần tử lớn nhất trong mảng là: ${Math.max(...numbers)}`); */


/* //Bài 2: Tìm phần tử nhỏ nhất trong mảng số
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
document.write(`Phần tử nhỏ nhất trong mảng là: ${Math.min(...numbers)}`); */


/* //bài 3: Tính trung bình cộng các số trong mảng
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
let sum = 0
for (let i = 0; i < n; i++) {
    sum+=numbers[i]
}
document.write(`Trung bình cộng các số trong mảng = ${sum / numbers.length}`) */


/* //Bài 4: Sắp xếp mảng tăng dần:
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
document.write(`Mảng sau sắp xếp tăng dần: ${numbers.sort((a, b) => a - b)}`) */


/* //Bài 5: Sắp xếp mảng giảm dần: 
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
document.write(`Mảng sau sắp xếp giảm dần: ${numbers.sort((a, b) => b - a)}`) */


/* //bài 6: Đếm số phần tử chẵn trong mảng
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
document.write(`Có ${numbers.filter(num => num % 2 === 0).length} số chẵn trong mảng`) */


/* //bài 7: Đếm số phần tử lẻ trong mảng
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
document.write(`Có ${numbers.filter(num => num % 2 !== 0).length} số lẻ trong mảng`) */


/* //Bài 8: Tìm vị trí đầu tiên của 1 số trong mảng
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
let index = parseInt(prompt("Nhập số bạn muốn tìm:"))
let found = numbers.findIndex(num => num === index); // tìm giá trị đầu tiên khớp với index
if (found !== undefined) {
  document.write(`Đã tìm thấy vị trí đầu tiên chứa số bạn yêu cầu ở phần tử thứ ${found + 1}`);
} else {
  document.write('Không tìm thấy số bạn yêu cầu');
} */


/* //Bài 9: Tìm vị trí cuối cùng của 1 phần tử
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
let index = parseInt(prompt("Nhập số bạn muốn tìm:"))
let found = numbers.lastIndexOf(index); // tìm giá trị cuối cùng khớp với index
if (found !== undefined) {
  document.write(`Đã tìm thấy vị trí cuối cùng chứa số bạn yêu cầu ở phần tử thứ ${found + 1}`);
} else {
  document.write('Không tìm thấy số bạn yêu cầu');
} */


/* //Bài 10: Xoá phần tử tại vị trí k trong mảng
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
let index = parseInt(prompt("Nhập số xoá ở vị trí thứ mấy:")) - 1; 
if (index >= 0 && index < numbers.length) {
  numbers.splice(index, 1); // Xoá 1 phần tử tại vị trí index
  document.write(`Đã xoá phần tử ở vị trí thứ ${index + 1}. Mảng sau khi xoá: [${numbers.join(', ')}]`);
} else {
  document.write('Vị trí không hợp lệ.');
} */


/* //Bài 11: Thêm phần tử vào vị trí k trong mảng
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
let index = parseInt(prompt("Nhập vị trí bạn muốn chèn phần tử vào:")) - 1; // Chuyển sang chỉ số mảng (0-based)
if (index >= 0 && index <= numbers.length) {
  let newValue = parseFloat(prompt("Nhập giá trị bạn muốn chèn:"));
  while (isNaN(newValue)) {
    newValue = parseFloat(prompt("Giá trị không hợp lệ! Nhập lại giá trị bạn muốn chèn:"));
  }
  numbers.splice(index, 0, newValue); // Chèn newValue vào vị trí index, không xoá phần tử nào
  document.write(`Đã chèn phần tử ${newValue} vào vị trí thứ ${index + 1}. Mảng sau khi chèn: [${numbers.join(', ')}]`);
} else {
  document.write('Vị trí không hợp lệ.');
} */


/* //Bài 12: Đếm số lần xuất hiện của một số trong mảng
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
let index = parseInt(prompt("Nhập số xoá ở vị trí thứ mấy:")) - 1; 
if (index >= 0 && index < numbers.length) {
  numbers.splice(index, 1); // Xoá 1 phần tử tại vị trí index
  document.write(`Đã xoá phần tử ở vị trí thứ ${index + 1}. Mảng sau khi xoá: [${numbers.join(', ')}]`);
} else {
  document.write('Vị trí không hợp lệ.');
} */


/* //bài 13: Tạo mảng mới chứa các số dương từ mảng ban đầu:
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
let pos = numbers.filter(num => num > 0)
document.write(`Mảng mới chứa các số dương đã lọc: ${pos.join(', ')}`)
 */


/* //bài 14: Tạo mảng mới chứa các số lẻ từ mảng ban đầu:
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
let pos = numbers.filter(num => num%2!==0)
document.write(`Mảng mới chứa các số lẻ đã lọc: ${pos.join(', ')}`)
 */


/* //Bài 15: Tìm tất cả các số nguyên tố trong mảng
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
let prime = numbers.filter(a => {
  if (a === 0 || a === 1) return false;
  else if (a === 2 || a === 3) return true;
  else {
    for (let i = 2; i < a; i++) {
      if (a % i === 0) return false;
    }
    return true;
  }
});
document.write(`Mảng mới chứa các số nguyên tố đã lọc: ${prime.join(', ')}`)
 */


/* //Bài 16: Kiểm tra mảng có số chính phương không
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
// Lọc ra các số chính phương
let chinhphuong = numbers.filter(num => num >= 0 && Number.isInteger(Math.sqrt(num)));
// Kiểm tra và xuất kết quả
if (chinhphuong.length === 0) {
  document.write("Rất tiếc, mảng đã nhập không có số chính phương nào cả.");
} else {
  document.write(`Mảng có ${chinhphuong.length} số chính phương, gồm: ${chinhphuong.join(', ')}`);
} */


/* // Bài 17: Tính tích các phần tử trong mảng. 
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
let equal = numbers.reduce((acc, val) => acc * val, 1);
document.write(`Tích các phần tử trong mảng = ${equal}`) */


// Bài 18: Tìm mảng con có tổng lớn nhất. 


/* // Bài 19: Xóa các phần tử trùng lặp trong mảng. 
let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
document.write(`Đã xoá các phần tử trùng lặp trong mảng. Mảng mới sau khi lọc: ${[...new Set(numbers)]}`) */


/* // Bài 20: Gộp hai mảng thành một mảng mới. 
//tạo mảng đầu tiên
let n = parseInt(prompt("Nhập số lượng phần tử của mảng thứ nhất:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
//tạo mảng thứ hai
let m = parseInt(prompt("Nhập số lượng phần tử của mảng thứ hai:"));
while (isNaN(m) || m <= 0) {
  m = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let joining = [];
for (let i = 0; i < m; i++) {
  let value2 = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value2)) {
    value2 = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  joining.push(value2);
}
document.write(`Đã gộp 2 mảng. Mảng mới sau khi gộp 2 mảng cũ: ${[...numbers, ...joining]}`) */


/* // Bài 21: Tìm giao của hai mảng số. 
//tạo mảng đầu tiên
let n = parseInt(prompt("Nhập số lượng phần tử của mảng thứ nhất:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
//tạo mảng thứ hai
let m = parseInt(prompt("Nhập số lượng phần tử của mảng thứ hai:"));
while (isNaN(m) || m <= 0) {
  m = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let joining = [];
for (let i = 0; i < m; i++) {
  let value2 = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value2)) {
    value2 = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  joining.push(value2);
}
document.write(`Đã tìm các giao của hai mảng số gồm ${numbers.filter(num => joining.includes(num))}`) */


/* // Bài 22: Tìm hợp của hai mảng số. 
//tạo mảng đầu tiên
let n = parseInt(prompt("Nhập số lượng phần tử của mảng thứ nhất:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
//tạo mảng thứ hai
let m = parseInt(prompt("Nhập số lượng phần tử của mảng thứ hai:"));
while (isNaN(m) || m <= 0) {
  m = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let joining = [];
for (let i = 0; i < m; i++) {
  let value2 = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value2)) {
    value2 = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  joining.push(value2);
}
document.write(`Đã tìm hợp của 2 mảng. Mảng mới sau khi hợp: ${[...new Set([...numbers, ...joining])]}`)  */


/* // Bài 23: Kiểm tra mảng có tăng dần hay không. 
let n = parseInt(prompt("Nhập số lượng phần tử của mảng thứ nhất:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
        document.write('Mảng không tăng dần');
        break;
    } if (i === numbers.length - 2) {
        document.write('Mảng có tăng dần');
    }
} */


/* // Bài 24: Kiểm tra mảng có giảm dần hay không. 
let n = parseInt(prompt("Nhập số lượng phần tử của mảng thứ nhất:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] < numbers[i + 1]) {
        document.write('Mảng không giảm dần');
        break;
    } if (i === numbers.length - 2) {
        document.write('Mảng có giảm dần');
    }
} */


/* // Bài 25: Tìm số xuất hiện nhiều nhất trong mảng.
let n = parseInt(prompt("Nhập số lượng phần tử của mảng thứ nhất:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
// Dùng reduce để duyệt qua toàn bộ mảng "numbers" và tìm phần tử xuất hiện nhiều nhất
let mostFrequent = numbers.reduce((a, b, i, arr) => 
    arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b
    // So sánh số lần xuất hiện của "a" và "b" trong mảng arr
    // arr.filter(v => v === a).length: đếm số lần a xuất hiện
    // arr.filter(v => v === b).length: đếm số lần b xuất hiện
    // Nếu a xuất hiện nhiều hơn hoặc bằng b => giữ lại a, ngược lại giữ b
);
// In ra kết quả: giá trị xuất hiện nhiều nhất trong mảng
document.write(`Số xuất hiện nhiều nhất là: ${mostFrequent}`); */


/* // Bài 26: Tạo mảng mới chứa bình phương các phần tử. 
let n = parseInt(prompt("Nhập số lượng phần tử của mảng thứ nhất:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
document.write(`Đã bình phương các phần tử trong mảng. Mảng mới sau bình phương: ${numbers.map(num => num*num)} `) */


// Bài 27: Tìm độ dài mảng con tăng dần dài nhất. 


/* // Bài 28: Tìm số nhỏ thứ hai trong mảng. 
let n = parseInt(prompt("Nhập số lượng phần tử của mảng thứ nhất:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
document.write(`Phần tử nhỏ thứ nhì trong mảng là ${[...new Set(numbers)].sort((a,b) => a-b)[1]} `)  */


// // Bài 29: Xoay mảng sang trái k vị trí. 
// let n = parseInt(prompt("Nhập số lượng phần tử của mảng thứ nhất:"));
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
// let k = parseInt(prompt("Nhập số vị trí muốn xoay sang trái:"));
// k %= numbers.length;
// numbers = numbers.slice(k).concat(numbers.slice(0, k));
// //numbers.slice(k): lấy phần tử từ sau vị trí k đến hết
// //numbers.slice(0, k): lấy k phần tử đầu
// document.write(`Mảng sau khi xoay trái ${k} vị trí: ${numbers}`);
// //Output: 4,5,1,2,3

// Bài 30: Xoay mảng sang phải k vị trí. 
let n = parseInt(prompt("Nhập số lượng phần tử của mảng thứ nhất:"));
while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Không hợp lệ! Nhập lại số lượng phần tử (số nguyên dương):"));
}
let numbers = [];
for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
  while (isNaN(value)) {
    value = parseFloat(prompt(`Không hợp lệ! Nhập lại phần tử thứ ${i + 1}:`));
  }
  numbers.push(value);
}
let k = parseInt(prompt("Nhập số vị trí muốn xoay sang phải:"));
k %= numbers.length; // tránh k > độ dài mảng
numbers = numbers.slice(-k).concat(numbers.slice(0, -k));
//numbers.slice(-k):  lấy k phần tử cuối.
//numbers.slice(0, -k): lấy các phần tử từ đầu đến trước k.
document.write(`Mảng sau khi xoay phải ${k} vị trí: ${numbers}`);
//Output: 3,4,5,1,2
