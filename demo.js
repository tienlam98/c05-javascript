// bai1
// let i = prompt("Nhap so bat ky");
// let x = 1;
// while (x <= i) {
//     if(i % x == 0){
//         console.log(x);
//     }
//     x++;
// }

// bai2
// let i = prompt("Nhap so bat ky");
// let x = 1;
// while (x <= i) {
//     if(i % x == 0 && x % 2 == 0){
//         console.log(x);
//     }
//     x++;
// }

// bai3
// let tong = 0;
// let x = prompt("Nhap so nguyen bat ky");
// for (let i = 1; i <= x; i++) {
//     if (x % i == 0){
//         tong += i;
//     }
// }
// console.log(tong);

// bai4
// let tich = 1;
// let x = prompt("Nhap so nguyen bat ky");
// for (let i = 1; i <= x; i++) {
//     if (x % i == 0 && i % 2 == 0) {
//         tich = tich * i;
//     }
// }
// console.log(tich);

// bai5
// let demSoUoc = 0;
// let x = prompt("Nhap so nguyen bat ky");
// for (let i = 1; i <= x; i++) {
//     if (x % i == 0) {
//         demSoUoc++;
//     }
// }
// console.log(demSoUoc);

// bai6a
// let x = Number(prompt("Nhap so nguyen bat ky"));
// function isPrime(number) {
//     if (number == 1) {
//         return true;
//     }
//     else {
//         if (number > 1) {
//             for (let i = 2; i < number; i++) {
//                 if (number % i == 0) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }
// if (isPrime(x)) {
//     console.log(x, "la so nguyen to");
// }
// else {
//     console.log(x, "khong la so nguyen to");
// }

// bai6b
// let soUoc = 0;
// let x = prompt("Nhap so nguyen bat ky");
// for (let i = 1; i <= x; i++) {
//     if (x % i == 0) {
//         soUoc++;
//         }    
//     }
// if (soUoc == 2) {
//     console.log(x, "la so nguyen to");
// }

// bai7
// let a = [2,3,5,6,7,9];
// let n = a.length;
// for (let i = 0; i < n; i++) {
//     if (a[i] % 2 == 0) {
//         console.log(a[i]);
//     }
// }

// bai8
// let a = [1,3,5,7,-2,-7,10];
// let n = a.length;
// for (let i = 0; i < n; i++) {
//     if (!(a[i] < 0)) {
//         console.log(a[i]);
//     }
// }

// bai9
// let a = [1,3,5,7,-2,-7,10];
// let soUoc = 0;
// let n = a.length;
// let flag = -1;
// for (let i = 0; i < n; i++) {
//     if (a[i] == 1) {
//         flag = 1;
//     }
//     if (a[i] % )
// }

// bai10
// let tongAm = 0;
// let a = [1,2,3,-2,-4,-6,10];
// let n = a.length;
// for (let i = 0; i < n; i++) {
//     if (a[i] < 0) {
//         tongAm += a[i];
//     }
// }
// console.log("Tong cac so am trong mang la", tongAm);

// bai11

// bai12
// let demLe = 0;
// let a = [1,2,3,7,8,22,13-2,-4,-3,-6,10];
// let n = a.length;
// for (let i = 0; i < n; i++) {
//     if (a[i] % 2 != 0) {
//         demLe++;
//     }
// }
// console.log("Mang co",demLe, "so le");

// bai13

// bai14
// let a = [1,2,3,7,-8,22,13-2,-4,-3,-6,10];
// let n = a.length;
// for (let i = 0; i < n; i++) {
//     if (a[i] < 0) {
//         console.log("So am dau tien la:", a[i]);
//         break;
//     }
// }

// bai15
let maSinhVien = Number(prompt("Nhap ma so sinh vien"));
let classA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let n = classA.length;
for (let i = 0; i < n; i++) {
    if (classA[i] === maSinhVien) {
        console.log("Ma so sinh vien o vi tri thu", i);
    }
}








