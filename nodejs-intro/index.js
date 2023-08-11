// commonjs vs esmodules


const obj = {
    name: "Henry",
    age: 42
}

// console.log("the name from object is ", obj.name);

const fun = function () {
    console.log("this is a fun function");
}

//commonjs format
module.exports = {
    obj123: obj,
    fun123: fun
}

// module.exports = {
//     obj,
//     fun
// }