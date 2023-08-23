import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // const today = new Date();
    // let day = today.getDay();

    // console.log(day);
    res.render("index.ejs", { 
        dayType: "a weekday", 
        advice: "its time to work hard" 
    });
})

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});