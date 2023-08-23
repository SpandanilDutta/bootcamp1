const express = require ("express");
const app = express();
let port = 3000;

const sendmail = require ("./controller/sendmail");

app.get("/", (req, res) => {
    res.send("I am a server");
});

app.get("/mail", sendmail);

const start = async () => {
    try {

        app.listen(port, () => {
            console.log(`I am live in port ${port}`);
        });

    } catch (error) {

    }
};

start();