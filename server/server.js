const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
require('dotenv').config();
app.use(cors());
const port = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {console.log('success connect db');})
    .catch(err => {console.log(err);})

app.use(express.json());
app.use('/', require('./routes/router'));

app.listen(port, () => {
    console.log(`Server working: http://localhost:${port}`);
})