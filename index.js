require('dotenv').config();

const app = require('./server')

app.get("/", (req, res) => {
    res.send("Oh Hi There!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`\n Server is running on http://localhost:${port}\n`);
});