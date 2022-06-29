// const { application } = require("express");
const express = require("express");
const nodes = require("./data/nodes");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes =require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const app = express();

dotenv.config();
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API is running....");
});

app.get("/api/nodes", (req, res) => {
    res.json(nodes);
});


app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is started on port ${PORT}`));
