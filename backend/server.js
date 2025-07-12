const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require("dotenv").config();

const port = process.env.PORT

main().then(() => {
    console.log("Successfully Connected to Database");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
};

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

app.get('/api', (req, res) => {
    res.send("server is ready...")
})
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});