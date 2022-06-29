// const { application } = require("express");
const express = require("express");
const nodes = require("./data/nodes");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const app = express();

dotenv.config();
connectDB();
app.get("/", (req, res) => {
    res.send("API is running....");
});

app.get("/api/nodes", (req, res) => {
    res.json(nodes);
});

app.get("/api/nodes/:id", (req, res) => {
    const node = nodes.find((n) => n._id === req.params.id);
    res.send(node);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is started on port ${PORT}`));
