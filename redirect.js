const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

let auth_code = -1;

app.get("/", (req, res) => {

    const auth = req.query.auth_code;
    console.log(auth);
    res.send("hey there we are active")

    auth_code = auth;

    setTimeout(() => {
        auth_code = -1;
    }, 1000000);
});


app.get("/back", (req, res) => {
    res.json({ auth: auth_code });
});
app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});

