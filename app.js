const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Using PORT ${port}!`);
});

app.get("/", (req, res) => {
    res.status(200).send("Mencobaa Nih")
});

module.exports = app;