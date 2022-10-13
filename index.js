const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Flamingo");
});

app.listen(process.env.PORT || 4000, () =>
    console.log("Listening on port 4000")
);