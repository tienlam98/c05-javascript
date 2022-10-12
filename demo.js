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

// bai6
// let soUoc = 0;
// let x = prompt("Nhap so nguyen bat ky");
// if (x == 1) {
//     console.log("so nguyen to");
// }
// else {
//     for (let i = 1; i <= x; i++) {
//         if (x % i == 0) {
//             soUoc++;
//         }
//         if (soUoc == 2 && i == x) {
//             console.log("Day la so nguyen so");
//         }
// }
// }

// bai7
// let n = Number(prompt("Nhap so nguyen bat ky"));
// for (let i = 0; i <= n; i++) {
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }

// bai8
// let n = Number(prompt("Nhap so nguyen bat ky"));
// for (let i = 0; i <= n; i++) {
//     if (i > -1) {
//         console.log(i);
//     }
// }

// bai9

// bai10
let tongAm = 0;
let n = Number(prompt("Nhap so nguyen bat ky"));
for (let i = 0; i <= n; i++) {
    if (i > -1) {
        tongAm = tongAm + i;
    }
}
console.log(tongAm);

