const path = require("path");
const express = require("express");
const app = express();
const hbs = require ("hbs");


const staticPath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../template/views");
const partialpaths = path.join(__dirname, "../template/partials");


app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpaths);

// app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index", {
        emotion : "jhand",
    });
});

port = 3000;

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(port, () => {
    console.log (`Listening to the port ${port}`)
})