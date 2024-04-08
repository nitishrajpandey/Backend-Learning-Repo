
// import { readFileSync } from "fs";
// import { readFile } from "fs/promises";

// console.log("hello raj");

// //const readfile = readFileSync('read.txt', 'utf8'); // this is sync readfile means block the code
// const read = await readFile('read.txt', 'utf-8')
// console.log(read);
// console.log("hello nitish");


// import { readFile } from "fs/promises";

// async function main() {
//     console.log("hello raj");

//     try {
//         const read = await readFile('read.txt', 'utf-8');
//         console.log(read);
//     } catch (error) {
//         console.error("Error reading file:", error);
//     }

//     console.log("hello nitish");
// }

// main();


// import { readFile } from 'fs/promises';

// async function readFileAsync() {
//     const t1 = performance.now()
//     console.log("hello raj");

//     try {
//         const read = await readFile('read.txt', 'utf-8');
//         console.log(read);
//     } catch (error) {
//         console.error("Error reading file:", error);
//     }
//     const t2 = performance.now()

//     console.log("hello nitish");
//     console.log(t2 - t1);
// }

// readFileAsync();


import { readFileSync } from 'fs';

const t1 = performance.now()
console.log("hello raj");

try {
    const readfile = readFileSync('read.txt', 'utf8');
    console.log(readfile);
} catch (error) {
    console.error("Error reading file:", error);
}
const t2 = performance.now()

console.log("hello nitish");
console.log(t2 - t1);
