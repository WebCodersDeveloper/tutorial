// // ternary operator
// let age = 70;

// let res1 = age > 18 ? 'can swim' : age > 16 ? 'can eat smth' : age > 12 ? 'cane play ping pong' : 'cant'



// // let students = ['ali', 'vali','gani','john','shavkat','olimjon']

// // for (let i = 0; i < students.length ; i++){
// //     console.log(
// //         students[i]
// //     );
// // }

// let students = [
//     {
//         name: 'ali',
//         score: 33
//     },
//     {
//         name: 'vali',
//         score: 23
//     },
//     {
//         name: 'gani',
//         score: 27
//     },
//     {
//         name: 'qani',
//         score: 30
//     },
//     {
//         name: 'john',
//         score: 29
//     }
// ]

// function recommendJob(arr) {
//     for (let i = 0; i < arr.length; i++)
//         if (arr[i].score > 25) {
//             console.log(
//                 `${students[i].name} you should keep up working`
//             );
//         }
// }
// recommendJob(students)


// let a = 20;
// let b = 2;

// for (let i = b; i >= a; --i) {
//     console.log(i);
// }
// let a = 85;
// let b = 2;

// for (let i = a - 1; i > b; i--) {
//     console.log(i);
// }

// let sum = 1000;

// for (let i = 0; i < 10; i++) {
//     console.log(sum);
//     sum+=1000
    
// }

// let sum = 100;

// for (let i = 1; i <= 10; i++) {
//     console.log(sum);
//     sum += 100
    
// }
// let sum = 1200;

// for (let i = 1; i <= 5; i++) {
//     console.log(sum);
//     sum += 200
    
// }
// program to display the sum of natural numbers
// let a = 2;
// let b = 20;

// for (let i = 1; i <=b; i++) {
//     a += i

    
// }
// console.log(a);

// let a = 2;
// let b = 20;

// for (let i = 1; i <=b; i++) {
//     a *= i

    
// }
// console.log(a);

// let a = 2;
// let b = 8;
// let res = 0;

// for (let i = a; i <=b; i++) {
//     res += i
    

    
// }
// console.log(res ** 2);

// let n = 43;

// for (let i = 0; i <=n; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
    
// }
// let n = 44;

// for (let i = 1; i <=n; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
    
// }
// let n = 44;
// let res = 0
// for (let i = 1; i <=n; i++) {
//     if (i % 2 == 0) {
//         res += i
//     }
    
// }
// console.log(res);

// let n = 43;
// let res = 0
// for (let i = 1; i <=n; i++) {
//     if (i % 2 != 0) {
//         res += i
//     }
    
// }
// console.log(res);

// let n = 40;
// let res = 0
// for (let i = 1; i <=n; i++) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
    
// }

let n = 3;
let res = 1;
for (let i = 1; i <=n; i++) {
    res *= i
    
}
console.log(res);