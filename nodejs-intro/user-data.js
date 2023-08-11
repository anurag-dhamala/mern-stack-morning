

// const importedObj = require("./index");
// console.log("the imported object is ", importedObj);
// console.log("the object inside importedObject::", importedObj.obj123);
// importedObj.fun123();


// commonjs import format
// object destructuring
const { obj123, fun123 } = require("./index");

console.log(obj123);

// console.table(obj123);

fun123();