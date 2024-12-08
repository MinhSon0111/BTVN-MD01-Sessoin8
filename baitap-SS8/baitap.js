//BAI1
alert("XIN CHAO BAN DEN VOI TRANG WEB")

//BAI2
let i = 10
let f = 20.5
let b = true
let s = "HA NOI"

console.log("so nguyen:",i);
console.log("so thuc  :",f);
console.log("hoc IT   :",b?"kho":"de");
console.log("que quan :",s);


//bai3
let width = 10;
let height = 20;

console.log("dien tich :",width*height,"m2");


//bai4

confirm("Bạn có yêu lập trình web không?");


//bai5
const vatLy = prompt('nhập điểm Vật lý:');
const hoaHoc = prompt('nhập điểm Hóa học:');
const sinhHoc = prompt('nhập điểm Sinh hoc:');


console.log("Tổng điểm 3 môn :", vatLy+hoaHoc+sinhHoc);
console.log("Điểm trung bình 3 môn :", (vatLy+hoaHoc+sinhHoc)/3);

//bai6
const celsius = prompt('Nhập giá trị độ C (Celsius) mà bạn muốn đổi sang độ F(Fahrenheit)');

console.log("Giá trị độ F :",celsius*9/5+32);

//bai7
const widthRectangle = prompt('Enter width of rectangle (m)');
const heightRectangle = prompt('Enter height of rectangle (m)');

console.log("rectangular perimeter :",(2*widthRectangle + 2*heightRectangle) ,"m");
console.log("rectangular area :",widthRectangle*heightRectangle, "m2");

//bai8
const PI = 3.14;
const radius = prompt('Enter circle radius (m)');

console.log("circular circumference :",2*PI*radius, "m");
console.log("circular area :",PI*radius*radius, "m2");

