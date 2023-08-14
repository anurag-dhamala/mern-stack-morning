import os from "node:os";

// console.log("OS: ", os);

console.log("Architecture", os.arch());
console.log("CPUS::", os.cpus());
console.log("Free memory: ", os.freemem());
console.log("HOst name: ", os.hostname());