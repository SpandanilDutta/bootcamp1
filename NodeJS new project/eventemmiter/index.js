const EventEmitter = require ("events");

const event = new EventEmitter();

// event.on("sayMyName", () => {
//     console.log("Your name is Jishu");
// });

// event.on("sayMyName", () => {
//     console.log("Your name is Spandanil");
// });

// event.on("sayMyName", () => {
//     console.log("Your name is Span");
// });

event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit("checkPage", 200, "ok");