const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app = express();
require('dotenv').config();
const port = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {console.log('success connect db');})
    .catch(err => {console.log(err);})

app.use(cookieParser())
app.use('/uploads', express.static('uploads'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    "Content-Type": "*",
    origin: true,
    credentials: true
}))

// Serve static files from the Vue app
// app.use(express.static(path.join(`${__dirname}/client/dist`)))

app.use('/', require('./routes/router'));

app.listen(port, () => {
    console.log(`Server working: http://localhost:${port}`);
})