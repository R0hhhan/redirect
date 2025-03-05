const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.get("/", (req, res) => {

    const auth = req.query.auth_code;
    console.log(auth);
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);
    res.send("hey there we are active")
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});

