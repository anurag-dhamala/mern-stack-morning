

/* -------------PRIMITIVE DATA TYPES */
const numberVariable = 1_00_00_00_000; // number
const floatIsAlsoANumber = 1.43498349834; // number

const infinityNumber = Infinity; // number


const str = 'Ram'; // string

const booleanVariable = true;

const nullValue = null;

const undefinedVariableButNotRecommended = undefined; // not recommended

const uniqueSymbol = Symbol("ram");

// console.log("Type of numberVariable: ", typeof str);


// NON PRIMITIVE DATA TYPES // 

// Array

// const arr = ["a", "b", "c"];
// console.log(arr[2]);
// console.log(arr[3]);

// arr.push(true);
// console.log(arr)

// const lastItem = arr.pop();
// console.log("lastItem: ", lastItem)
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);


// const newArr = arr.map((it)=> {
//     return it+"i"
// })

// console.log("the new Arr: ", newArr);

// arr.forEach((it) => {
//     console.log("each item: ", it);
// })







// let x = 9;



// Arithmetic operators 

// let first = 5;
// let second = 2;


// console.log("Addition: ", first + second);
// console.log("Subtraction: ", first - second);
// console.log("Multiplication: ", first * second);
// console.log("Division: ", first / second);
// console.log("Reminder: ", first % second);
// console.log("Increment by 1: ", first++);
// console.log("2 to the power", 2 ** 4);


// const roundOff = Math.round(Math.PI);
// // console.log("round off: ", roundOff);

// first = first + 1; // first++
// second = second - 1; // second --;

// // Assignment operators
// let x = 5;
// let y = 90;

// x+=y; // x = x + y
// x-=y; // x = x - y;
// x /= y; // x = x / y;

// Comparison Operators

let x = 5;
let y = "5";
// console.log(x == y);
// console.log(x === y);
// console.log(4 > 5 > 1);


console.log(null >= 0); // true
console.log(null == 0); // false
console.log(null > 0); // false

// console.log( 5 & 6);
// 0101 --> 5
// 0110 --> 6


// Conditionals In JavaScript

let num = 2;
if(num < 5) { 
    console.log("number is less than 5");
} else if (num < 6) {
    console.log("number is less than 6");
} else if (num < 8) {
    console.log("number is less than 8");
} else {
    console.log("-----");
}

// TERNARY OPERATOR
5 < 0 ? console.log("5 is less than 0") : console.log("5 is greater than 0");
// is equivalent to
if(5 < 0) {
    console.log("5 is less than 0")
} else { 
    console.log("5 is greater than 0")
}

// COMPLEX TERNARY EXAMPLE
num < 5 ? 
console.log("number is less than 5") : 
num < 6 ? 
console.log("number is less than 6") :
num < 8 ? 
console.log("number is less than 8") :
console.log("-----");
