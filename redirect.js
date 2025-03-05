const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.get("/", (req, res) => {

    const auth = req.params.auth_code;
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});

