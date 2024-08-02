import express from 'express';
import dotenv from 'dotenv';

dotenv.config("./config/config.env");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(3000, () => {
    console.log("Done Port 3000!");
});