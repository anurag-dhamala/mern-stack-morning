
// defining the function
function checkIfIHaveCovid(temperature, mancheKoName) {
    if(temperature < 95) {
        console.log("Please provide the valid temperature");
        return;
    }
    if (temperature < 103) {
        console.log(`No, ${mancheKoName} do not have covid`);
    } else {
        console.log(`Oh no! ${mancheKoName} have covid.`)
    }
    // console.log("No i don't have covid");
}

// checkIfIHaveCovid(90, "Ram"); // calling the function

// checkIfIHaveCovid(100, "Shyam"); // calling the function


// const arr = [1, 2, 3, 4, 5];
// console.log(...arr);
// console.log(arr);

//SPREAD OPERATOR
function anotherFunction(...args) {
    console.log("the args is :", args);
}

// anotherFunction(1, 2, 3, 4, "Ram", "Hari");

// FUNCTION EXPRESSION 

let a = 5;
const b = function (...args) {
    // do its work
}
b(34, 343 ,43, 34);

// NAMED FUNCTION EXPRESSION
const fun = function testFunction() {
    console.log("i m named function expression")
}

// fun();


// ANONYMOUS FUNCTION --> function without a name
// anonymous functions must be assigned to a variable.
// or it can be callbacks.
// function () {

// }

// ARROW FUNCTION 
const arrowFun = () => {
    console.log(" i am an arrow function");
}

const testArr = [1, 2, 3];
testArr.forEach((item)=> {
    console.log(item);
});


// forEach is a function 
// testArr.forEach();


// Prototype and prototype chaining....
// and protoypal inheritance.
Array.prototype.customForEach = function (fun) {
    let context = this;
    for(let i = 0; i< this.length; i++) {
        fun(context[i]);
    }
}


// callback functions are those functions that are passed to another function as an argument.
testArr.customForEach(
    
    (item)=> {
        console.log("Item from custom for each", item);
    }

)

// higher order functions are those types of functions that takes another function as an argument
// or returns another function.

// return in function

const trackCarSpeed =(speed)=> {
        // some task perform
        if(speed > 90) {
            return "Ferrari";
        } 
        return "Mustang";

}

const returnedCar = trackCarSpeed(100);