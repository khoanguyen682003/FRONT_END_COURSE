// done 12 câu

/* //bài 7: Tìm vị trí đầu tiên của một kí tự trong chuỗi:
let str = prompt("Nhập chuỗi:");
let char = prompt("Nhập ký tự cần tìm:");
let index = str.indexOf(char);

if (index !== -1) {
  document.write(`Ký tự "${char}" xuất hiện đầu tiên ở vị trí: ${index}`);
} else {
  document.write(`Ký tự "${char}" không có trong chuỗi.`);
} */

/* //bài 8: Tìm vị trí cuối cùng của một kí tự trong chuỗi:
let str = prompt("Nhập chuỗi:");
let char = prompt("Nhập ký tự cần tìm:");
let index = str.lastIndexOf(char);

if (index !== -1) {
  document.write(`Ký tự "${char}" xuất hiện đầu tiên ở vị trí: ${index}`);
} else {
  document.write(`Ký tự "${char}" không có trong chuỗi`);
} */

/* //Bài 9: Thay thế 1 từ trong chuỗi bằng từ khác
let str = 'học, học nữa, học mãi'
document.write(str.replace('học','ngủ'))
document.write(`<br><br>`)
document.write(str.replace(/học/g,'ngủ')) */

/* //bài 10: Xoá khoảng trắng thừa trong chuỗi
let messagetwo = prompt('Nhập vào văn bản')
document.write(`văn bản sau xử lý tất cả các khoảng trắng thừa: ${messagetwo.split(" ").join("")}`);
document.write(`<br><br>`) */

/* //Bài 11: Tách chuỗi thành mảng các từ
let message = prompt('Nhập vào văn bản')
document.write(`Tách chuỗi: ${message.split('')}<br><br>`)
*/
/*
//Bài 12: Kiểm tra chuỗi có chứa một chuỗi con hay không
let message = prompt('Nhập vào văn bản')
let includeMessage = prompt('Nhập vào văn bản con để kiểm tra')
document.write(`chuỗi '${message}' đã nhập ${message.includes(includeMessage) ? 'có chứa chuỗi con là ' : 'không chưa chuỗi con là '} '${includeMessage}'`) */



/* //Bài 14: tạo chuỗi mới bằng cách lặp lại chuỗi n lần
let message = prompt('Nhập vào văn bản')
let n = parseInt(prompt('Bạn muốn lặp lại bao nhiêu lần'))
document.write(`chuỗi mới có lặp lại ${n} lần: ${message.repeat(n)}<br><br>`) */


/* //Bài 17: đảo ngược các từ trong chuỗi
let str = prompt("Nhập chuỗi:").toLowerCase().replace(/\s/g, '');
document.write(`chuỗi sau khi đảo ngược: ${str.split('').reverse().join('')}`);
 */

/* //Bài 18: Tìm từ dài nhất trong chuỗi
let str = prompt("Nhập chuỗi:");
let words = str.split(" ");
let longest = "";

for (let word of words) {
  if (word.length > longest.length) 
    longest = word;
}

document.write(`Từ dài nhất là: ${longest}`); */

/* //Bài 19: Tìm từ ngắn nhất trong chuỗi
let str = prompt("Nhập chuỗi:");
let words = str.split(" ");
let shortest = "";

for (let word of words) {
  if (word.length < shortest.length) 
    shortest = word;
}

document.write(`Từ ngắn nhất là: ${shortest}`); */

/* //Bài 20: Xoá 1 kí tự khỏi chuỗi
//VD1: Xoá kí tự ở vị trí tìm thấy đầu tiên:
let str = prompt("Nhập chuỗi:");
let rplc = prompt('Nhập kí tự muốn xoá')
document.write(`Xoá kí tự ở vị trí tìm thấy đầu tiên: ${str.replace(rplc, '')}<br><br>`);
//VD2: Xoá ở tất cả các vị trí tìm thấy kí tự:
document.write(`Xoá kí tự ở tất cả các vị trí tìm thấy: ${str.replaceAll(rplc, '')}<br><br>`) */


/* //Bài 24: Tách các chuỗi thành các mảng kí tự
let str = prompt("Nhập chuỗi:");
document.write(`Cắt thành các mảng kí tự: ${str.split("")}<br><br>`) */


