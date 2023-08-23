const os = require("os");

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

// const freeMemory = os.freemem();
// console.log(`${freeMemory / 1024 / 1024 / 1024}`);

// const totalmemory = os.totalmem();
// console.log(`${totalmemory / 1024 / 1024 / 1024}`);