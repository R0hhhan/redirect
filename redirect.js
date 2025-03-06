const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

let auth_code = -1;
let used_code = false;

app.get("/", (req, res) => {

    const auth = req.query.auth_code;

    res.send("hey there we are active")

    if (auth) {
        auth_code = auth;
        used_code = false;
    }
    setTimeout(() => {
        auth_code = -1;
        used_code = false;
    }, 100000);
});


app.get("/back", (req, res) => {

    if (!used_code) {
        res.send({ auth: auth_code });
    }
    else {
        res.send({ auth: -1 });
    }
    used_code = true;

});


app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});

