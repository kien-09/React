// let arr = [1, 33, 222, 1111, 3333, 22];
// let sum = 0;
// let brr = arr.filter(e=>{
//     sum+=e;
//     return e> 1000;
// });
// console.log(sum);
// console.log(brr);

// let sum = arr.reduce((e,tong)=> tong + e,0)
// console.log(sum)

// let xyz = arr.find(x => x > 1000);
// console.log(xyz)

// let abc = arr.filter(x => x > 1000);
// console.log(abc)

let arr = [1,2,3,4];
let brr = arr;
let crr = [...arr];
arr.push(10);
console.log(arr);
console.log(brr);
console.log(crr);

let a1 ={
    name:"A",
    age: 20
}
let a2 = a1;
let a3 ={...a2};
a2.age = 21;
console.log(a1);
console.log(a2);
console.log(a3);