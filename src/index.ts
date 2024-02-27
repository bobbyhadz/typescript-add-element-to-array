export {};

// EXAMPLE 1 - Add Elements to the end of an Array in TypeScript

const arr: number[] = [];

arr.push(1);
arr.push(2);
arr.push(3);

// 👇️ [ 1, 2, 3 ]
console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 2 - Adding elements to an array of `any` type

// // const arr: any[]
// const arr = [];

// arr.push('bobby');
// arr.push(5);
// arr.push(true);

// console.log(arr); // 👉️ [ 'bobby', 5, true ]

// ---------------------------------------------------

// // EXAMPLE 3 - Add Element to the beginning of an Array in TypeScript

// const arr: string[] = ['hadz', 'com'];

// arr.unshift('bobby');

// console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ---------------------------------------------------

// // EXAMPLE 4 - Merging Arrays in TypeScript

// const arr1: number[] = [1, 2];
// const arr2: number[] = [3, 4];

// const arr3: number[] = [...arr1, ...arr2];

// // 👇️ [ 1, 2, 3, 4 ]
// console.log(arr3);

// ---------------------------------------------------

// // EXAMPLE 5 - Add one or more elements to Array at Index in TypeScript

// const arr: string[] = ['a', 'd', 'e'];

// arr.splice(1, 0, 'b', 'c');

// // 👇️ ['a', 'b', 'c', 'd', 'e']
// console.log(arr);
