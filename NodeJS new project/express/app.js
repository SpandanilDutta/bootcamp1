const express = require("express");

const app = express();

port = 3000;

app.get("/", (req, res) => {
    res.send("Hello from the express");
});

app.get("/about", (req, res) => {
    res.send("Hello from the about");
});


app.listen(port, () => {
    console.log (`Listening to the port ${port}`)
})