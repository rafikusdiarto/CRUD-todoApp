import cors from "cors";
import express from "express";
import db from "./config/db.js";
import ItemsRoute from "./routes/ItemsRoute.js";

// const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());
app.use(ItemsRoute);


// app.listen(PORT, () => console.log(`now connect to ${PORT}`));

// try {
//     await db.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

app.listen(process.env.PORT || 5000, () => console.log("now connect to 5000"))

// app.get('/', (req, res) => {
//     res.send("hello world");
// });