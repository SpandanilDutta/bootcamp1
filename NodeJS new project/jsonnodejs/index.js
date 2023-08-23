const fs = require("fs");


const biodata = {
    name : "Jishu",
    age : 20,
    Group : "Demons Slayer",
};
// console.log(biodata.name);
// const jsondata = JSON.stringify(biodata);
// const objdata = JSON.parse(jsondata);

// console.log(objdata.Group);

const jsondata = JSON.stringify(biodata);

// fs.writeFile("json1.json", jsondata, (err) => {
//     console.log("done");
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
    const orgdata = JSON.parse(data);
    console.log(data);
    console.log(orgdata);
});