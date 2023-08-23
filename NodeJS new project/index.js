const fs = require ("fs");


// Creating new file
// fs.writeFileSync("read.txt", "Welcome to my channel");
// fs.writeFileSync("read.txt", "Jishu Dutta, Welcome to my channel");
// fs.appendFileSync("read.txt", " Lets go play football");

// To read file
// const buf_data = fs.readFileSync("read.txt");
// org_data = buf_data.toString();
// console.log(org_data);

// To name file
fs.renameSync("read.txt", "readwrite.txt");
