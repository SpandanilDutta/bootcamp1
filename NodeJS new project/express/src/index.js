const path = require("path");
const express = require("express");
const app = express();


// const staticPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");

// app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index", {
        emotion : "mast",
    });
});

port = 3000;

app.get("/", (req, res) => {
    res.send("Hello from the express");
});

app.listen(port, () => {
    console.log (`Listening to the port ${port}`)
})