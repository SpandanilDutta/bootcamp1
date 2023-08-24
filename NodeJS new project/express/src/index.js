const path = require("path");
const express = require("express");
const app = express();
const hbs = require ("hbs");

const templatepath = path.join(__dirname, "../template");
const staticPath = path.join(__dirname, "../public");
const partialpaths = path.join(__dirname, "../template/partials");

hbs.registerPartials(partialpaths);

app.set("view engine", "hbs");
app.set("views", templatepath);

app.use(express.static(staticPath));

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