import cors from "cors";
import express from "express";
import db from "./config/db.js"

// const mongoose = require('mongoose');

const PORT = 5000
const app = express();
app.use(cors());
app.use(express.json());
// app.listen(PORT, () => console.log(`now connect to ${PORT}`));

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(5000, () => console.log("now connect to 5000"))

// app.get('/', (req, res) => {
//     res.send("hello world");
// });