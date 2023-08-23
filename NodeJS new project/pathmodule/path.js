const path = require("path");

console.log(path.dirname("C:/Users/Spandanil Dutta/OneDrive/Desktop/bootcamp/NodeJS new project/pathmodule/path.js"));
console.log(path.extname("C:/Users/Spandanil Dutta/OneDrive/Desktop/bootcamp/NodeJS new project/pathmodule/path.js"));
console.log(path.basename("C:/Users/Spandanil Dutta/OneDrive/Desktop/bootcamp/NodeJS new project/pathmodule/path.js"));
const mypath = path.parse("C:/Users/Spandanil Dutta/OneDrive/Desktop/bootcamp/NodeJS new project/pathmodule/path.js");
console.log(mypath.root);