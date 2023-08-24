const path = require("path");
const express = require("express");
const app = express();
const hbs = require ("hbs");
port = 3000;



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


app.get("/about", (req, res) => {
    res.render("about");
});

app.get("*", (req,res) => {
    res.render("404", {
        errorcomment: "oops page coudnt found",
    });
});

app.listen(port, () => {
    console.log (`Listening to the port ${port}`)
})