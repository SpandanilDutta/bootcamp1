const express = require("express");

app = express();

port = 3000;

app.get("/", (req, res) => {
    res.write("<h1>Welcome to my portfolio</h1>");
    res.write("<h1>Welcome to my portfolio again</h1>");
    res.send();
});

app.get("/about", (req, res) => {
    res.send("Welcome to my portfolio about");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to my portfolio contact");
});

app.get("/temp", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Jishu",
        },
        {
            id: 1,
            name: "Jishu",
        },
        {
            id: 1,
            name: "Jishu",
        },
    ]);
});

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});